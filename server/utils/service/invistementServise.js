const mongoose = require("mongoose");

const Invistement = require("../../models/ProjectInvistmint");
const {
  invistementValidation,
} = require("../../middlewares/invistementValidation");
const { ErrorHandler } = require("../helpers/errorHelper");

exports.getAllInvistements = async () => {
  const invistements = await Invistement.find();
  return invistements;
};

exports.getInvistementById = async (_id) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  const invistement = await Invistement.findById(_id);
  if (!invistement) throw new ErrorHandler(404, "invistement not found!");
  return invistement;
};

exports.addInvistement = async (data) => {
  const { error } = await invistementValidation(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);
  return await Invistement.create(data);
};
exports.updateInvistementById = async (_id, data) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  return await Invistement.findByIdAndUpdate(
    _id,
    { $set: data },
    { new: true }
  );
};
exports.RemoveInvistementById = async (_id) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  return await Invistement.findByIdAndRemove(_id);
};

exports.getInvistementByProjectId = async (projectId) => {
  const isvalid = mongoose.isValidObjectId(projectId);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  const invistements = await Invistement.find({ projectId });
  return invistements;
};
exports.getInvistementByInvistorId = async (invistorId) => {
  const isvalid = mongoose.isValidObjectId(invistorId);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  const invistements = await Invistement.find({ invistorId });
  return invistements;
};

exports.isInvistementDataValide = async (data) => {
  const { error, value } = isInvistementDataValide(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);
};

exports.getInvistementByProjectIdAndInvistorId = async (
  projectId,
  invistorId
) => {
  const isvalid = mongoose.isValidObjectId(projectId);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  const isvalid2 = mongoose.isValidObjectId(invistorId);
  if (isvalid2 === false) throw new ErrorHandler(400, "Invalid id");
  const invistements = await Invistement.find({ projectId, invistorId });
  return invistements;
};

exports.getInvistorInvistements = async (invistorId) => {
  const isvalid2 = mongoose.isValidObjectId(invistorId);
  if (isvalid2 === false) throw new ErrorHandler(400, "Invalid id");

  return await Invistement.find({ invistorId }).populate("projectId");
};
