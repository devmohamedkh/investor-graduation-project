const invistementService = require("../utils/service/invistementServise");
const { successResponse } = require("../utils/helpers/responsHelper");

exports.getAllInvistements = async (req, res, next) => {
  try {
    const invistements = await invistementService.getAllInvistements();
    successResponse(res, invistements);
  } catch (error) {
    next(error);
  }
};
exports.getInvistementById = async (req, res, next) => {
  try {
    const invistement = await invistementService.getInvistementById(
      req.params.id
    );
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};
exports.addInvistement = async (req, res, next) => {
  try {
    const invistement = await invistementService.addInvistement(req.body);
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};
exports.updateInvistementById = async (req, res, next) => {
  try {
    const invistement = await invistementService.updateInvistementById(
      req.params.id,
      req.body
    );
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};
exports.deleteInvistementById = async (req, res, next) => {
  try {
    const invistement = await invistementService.RemoveInvistementById(
      req.params.id
    );
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};
exports.getInvistementByProjectId = async (req, res, next) => {
  try {
    const invistement = await invistementService.getInvistementByProjectId(
      req.params.id
    );
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};
exports.getInvistementByInvistorId = async (req, res, next) => {
  try {
    const invistement = await invistementService.getInvistementByInvistorId(
      req.params.id
    );
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};

exports.getInvistorInvistemts = async (req, res, next) => {
  try {
    const invistement = await invistementService.getInvistorInvistements(
      req.params.id
    );
    successResponse(res, invistement);
  } catch (error) {
    next(error);
  }
};
