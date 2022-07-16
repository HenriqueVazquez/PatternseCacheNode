import {
  startOfHour,
  parseISO,
  isBefore,
  isAfter,
  format,
  setHours,
} from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import Appointment from '../models/Appointment';

import Notification from '../schemas/Notification';

import Cache from '../../lib/Cache';

class CreateAppointmentService {
  async run({ provider_id, user_id, date }) {
    // verificando se é um usuario
    const idUser = user_id;

    const isUser = await User.findOne({
      where: { id: idUser, provider: false },
    });

    if (!isUser) {
      throw new Error('Only User can create appointments');
    }

    // Verificar se provider_id é um provider

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      throw new Error('You can only create appointments with provider');
    }

    // Verificando se a data já não passou

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not permitted!');
    }

    if (
      isBefore(hourStart, setHours(hourStart, 7)) ||
      isAfter(hourStart, setHours(hourStart, 20))
    ) {
      throw new Error(
        'Informe uma data de agendamento, entre as 08:00 até as 20:00!'
      );
    }

    // verificando se a data esta valida para marcação

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvailability) {
      throw new Error('Appointment date is not avaible!');
    }

    const appointment = await Appointment.create({
      user_id,
      provider_id,
      date,
    });

    // notificar o prestador de serviço
    const user = await User.findByPk(user_id);

    const formatterdDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt }
    );

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formatterdDate}`,
      user: provider_id,
    });

    /** invalidate cache */

    await Cache.invalidatePrefix(`user:${user_id}:appointments`);

    return appointment;
  }
}

export default new CreateAppointmentService();
