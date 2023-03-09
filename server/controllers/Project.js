const { successResponse } = require("../utils/helpers/responsHelper");
const peojectService = require("../utils/service/projectServise");
exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await peojectService.getAllProjects();
    successResponse(res, projects);
  } catch (error) {
    next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await peojectService.getProjectById(req.params.id);
    successResponse(res, project);
  } catch (error) {
    next(error);
  }
};
exports.getProjectsByName = async (req, res, next) => {
  try {
    const projects = await peojectService.getProjectByName(req.params.name);
    successResponse(res, projects);
  } catch (error) {
    next(error);
  }
};
exports.addProject = async (req, res, next) => {
  try {
    req.body.logo = req.files.logo[0].path;
    req.body.backgroundImg = req.files.backgroundImg[0].path;

    const project = await peojectService.addProject(req.body);
    successResponse(res, project);
  } catch (error) {
    next(error);
  }
};
exports.updateProject = async (req, res, next) => {
  try {
    const project = await peojectService.updateProjectById(
      req.params.id,
      req.body
    );
    successResponse(res, project);
  } catch (error) {
    next(error);
  }
};
exports.RemoveProjectById = async (req, res, next) => {
  try {
    const project = await peojectService.RemoveProjectById(req.params.id);
    successResponse(res, project);
  } catch (error) {
    next(error);
  }
};
