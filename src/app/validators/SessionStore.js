import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Digite um email valido.')
        .required('Email é obrigatorio para o login.'),
      password: Yup.string().required('Senha é obrigatoria para o login.'),
    });

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
