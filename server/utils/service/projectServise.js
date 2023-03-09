const mongoose = require("mongoose");
const Project = require("../../models/Project");
const { ErrorHandler } = require("../helpers/errorHelper");
const {
  projectDataValidation,
} = require("../../middlewares/projectValidation");
exports.getAllProjects = async () => {
  const projects = await Project.find();
  return projects;
};
exports.getProjectById = async (_id) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  const project = await Project.findById(_id);
  if (!project) throw new ErrorHandler(404, "project not found!");
  return project;
};
exports.getProjectByName = async (name) => {
  const project = await Project.find({
    name: { $regex: ".*" + name + ".*", $options: "i" },
  });
  if (!project) throw new ErrorHandler(404, "project not found!");
  return project;
};
exports.addProject = async (data) => {
  const { error } = await projectDataValidation(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);

  return await Project.create(data);
};
exports.updateProjectById = async (_id, data) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  return await Project.findByIdAndUpdate(_id, { $set: data }, { new: true });
};
exports.RemoveProjectById = async (_id) => {
  const isvalid = mongoose.isValidObjectId(_id);
  if (isvalid === false) throw new ErrorHandler(400, "Invalid id");
  return await Project.findByIdAndRemove(_id);
};
exports.isNewProject = async (name) => {
  const project = await Project.findOne({ name });
  if (project) throw new ErrorHandler(400, "Project already exist!");
};
exports.isProjectDataValide = async (data) => {
  const { error, value } = projectDataValidation(data);
  if (error) throw new ErrorHandler(400, error.details[0].message);
};
