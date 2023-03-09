const Joi = require("joi");

exports.invistementValidation = async (data) => {
  const schema = Joi.object({
    projectId: Joi.string().required(),
    invistorId: Joi.string().required(),
    quentity: Joi.number().min(1).max(100).required(),
  });
  return schema.validate(data);
};
