const invistoerServise = require("../utils/service/invistoerServise");
const { successResponse } = require("../utils/helpers/responsHelper");

exports.getAllInvestors = async (req, res, next) => {
  try {
    const investors = await invistoerServise.getAllInvistoers();
    successResponse(res, investors);
  } catch (error) {
    next(error);
  }
};
exports.getInvestorById = async (req, res, next) => {
  try {
    const investor = await invistoerServise.getInvistoerById(req.params.id);
    successResponse(res, investor);
  } catch (error) {
    next(error);
  }
};
exports.getInvestorByEmail = async (req, res, next) => {
  try {
    const investor = await invistoerServise.getInvestorByEmail(
      req.params.email
    );
    successResponse(res, investor);
  } catch (error) {
    next(error);
  }
};

exports.getInvestorByName = async (req, res, next) => {
  try {
    const investor = await invistoerServise.getInvistoerByName(req.params.name);
    successResponse(res, investor);
  } catch (error) {
    next(error);
  }
};

exports.addInvestor = async (req, res, next) => {
  try {
    const investor = await invistoerServise.addInvistoer(req.body);
    successResponse(res, investor);
  } catch (error) {
    next(error);
  }
};
exports.updateInvestor = async (req, res, next) => {
  try {
    const investor = await invistoerServise.updateInvistoerById(
      req.params.id,
      req.body
    );
    successResponse(res, investor);
  } catch (error) {
    next(error);
  }
};

exports.deleteInvestor = async (req, res, next) => {
  try {
    const investor = await invistoerServise.removeInvistoerById(req.params.id);
    successResponse(res, investor);
  } catch (error) {
    next(error);
  }
};
