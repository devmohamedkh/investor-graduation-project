const Joi = require("joi");

const projectDataValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    logo: Joi.string().required(),
    idea: Joi.string().required(),
    backgroundImg: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    investors: Joi.number().required(),
    target: Joi.number().required(),
    equity: Joi.number().required(),
    sharePrice: Joi.number().required(),
    preMoneyValuation: Joi.number().required(),
  });
  return schema.validate(data);
};

module.exports = {
  projectDataValidation,
};
