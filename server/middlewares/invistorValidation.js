const Joi = require("joi");

const invistorDataValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    mobile: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    image: Joi.string(),
    gender: Joi.string(),
  });
  return schema.validate(data);
};

const isInvistoerLoginDataValide = async (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { invistorDataValidation, isInvistoerLoginDataValide };
