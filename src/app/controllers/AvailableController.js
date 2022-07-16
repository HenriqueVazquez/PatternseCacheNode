import AvailableServices from '../services/AvailableServices';

class AvailableController {
  async index(req, res) {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ Erro: 'Data invalida!' });
    }

    const searchDate = Number(date);

    const available = await AvailableServices.run({
      date: searchDate,
      provider_id: req.params.providerId,
    });

    return res.json(available);
  }
}

export default new AvailableController();
