import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome é obrigatorio para o cadastro.'),
      email: Yup.string()
        .email()
        .required('Email é obrigatorio para o cadastro.'),
      password: Yup.string()
        .required()
        .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
      confirmPassword: Yup.string()
        .min(6, 'A confirmação de senha deve ter no mínimo 6 caracteres')
        .when('password', (password, field) =>
          password
            ? field
                .required('Confirme a senha')
                .oneOf(
                  [Yup.ref('password')],
                  'As senhas não conferem, digite novamente'
                )
            : field
        ),
    });

    /* if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ Erro: 'validation fails' });
    } */

    await schema.validate(req.body, {
      abortEarly: false,
    });

    return next();
  } catch (err) {
    const errorMessages = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });

      return res.status(400).json(errorMessages);
    }

    return res.status(400).json({ errorMessages });
  }
};
