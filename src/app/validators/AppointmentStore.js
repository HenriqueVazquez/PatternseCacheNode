import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
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

    return res.json(err);
  }
};
