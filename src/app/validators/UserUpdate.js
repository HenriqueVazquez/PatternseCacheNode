import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().min(1, 'O nome precisa ter no mínimo 1 caracter.'),
      email: Yup.string()
        .email('O e-mail informado não é válido.')
        .min(5, 'Um email valido precisa de no minimo 5 caracteres.'),

      oldPassword: Yup.string().min(
        6,
        'A senha deve ter no mínimo 6 caracteres.'
      ),
      password: Yup.string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .when('oldPassword', (oldPassword, field) =>
          oldPassword
            ? field.required('A nova senha precisa ser informada')
            : field
        ),
      confirmPassword: Yup.string()
        .min(6, 'A confirmação de senha deve ter no mínimo 6 caracteres')
        .when('password', (password, field) =>
          password
            ? field
                .required()
                .oneOf(
                  [Yup.ref('password')],
                  'As senhas não conferem, digite novamente'
                )
            : field
        ),
    });

    await schema.validate(req.body, {
      abortEarly: false,
    });

    /* if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ Erro: `${schema}` });
  } */
    return next();
  } catch (err) {
    const errorMessages = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });

      return res.status(400).json(errorMessages);
    }

    /* if (err.errors.length === 1) {
        return res.status(400).json({ Erro: err.message });
      }
      const errorMessages = [];

      err.inner.forEach((error) => {
        errorMessages.push(error.message);
      }); */
    return res.status(400).json({ errorMessages });
  }
};
