const Invistoer = require("../../models/Invistoer");
const { ErrorHandler } = require("../helpers/errorHelper");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  invistorDataValidation,
  isInvistoerLoginDataValide,
} = require("../../middlewares/invistorValidation");

exports.getAllInvistoers = async () => {
  const invistoers = await Invistoer.find();
  return invistoers;
};
exports.getInvistoerById = async (_id) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  const invistoer = await Invistoer.findById(_id);
  if (!invistoer) throw new ErrorHandler(404, "invistoer not found!");
  return invistoer;
};
exports.getInvistoerByName = async (name) => {
  const invistoer = await Invistoer.findOne({ name });
  if (!invistoer) throw new ErrorHandler(404, "invistoer not found!");
  return invistoer;
};
exports.getInvestorByEmail = async (email) => {
  const invistoer = await Invistoer.findOne({ email });
  if (!invistoer) throw new ErrorHandler(404, "invistoer not found!");
  return invistoer;
};
exports.addInvistoer = async (data) => {
  const newInvistor = await createCustomerObj(data);
  return await Invistoer.create(newInvistor);
};
exports.updateInvistoerById = async (_id, data) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  return await Invistoer.findByIdAndUpdate(_id, { $set: data }, { new: true });
};
exports.removeInvistoerById = async (_id) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  return await Invistoer.findByIdAndRemove(_id);
};
exports.isNewInvistoer = async (email) => {
  const invistoer = await Invistoer.findOne({ email });
  if (invistoer) throw new ErrorHandler(400, "Invistoer already exist!");
};
exports.isInvistoerDataValide = async (data) => {
  const { error, value } = invistorDataValidation(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);
};
exports.isLogInDataValide = async (data) => {
  const { error } = isInvistoerLoginDataValide(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);
};

const createCustomerObj = async (req) => {
  return {
    name: req.name,
    email: req.email,
    password: bcrypt.hashSync(req.password, 10),
    gender: req.gender,
  };
};
