const invistoerServise = require("../utils/service/invistoerServise");
const { comparePassword } = require("../utils/helpers/comparePassword");
const jwtServise = require("../utils/helpers/jwt");
const { successResponse } = require("../utils/helpers/responsHelper");

exports.signin = async (req, res, next) => {
  try {
    await invistoerServise.isLogInDataValide(req.body);
    const invistoer = await invistoerServise.getInvestorByEmail(req.body.email);
    await comparePassword(req.body.password, invistoer.password);
    const token = jwtServise.creatJWT(invistoer._id);
    successResponse(res, { invistoer, token });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    await invistoerServise.isInvistoerDataValide(req.body);
    await invistoerServise.isNewInvistoer(req.body.email);
    const invistoer = await invistoerServise.addInvistoer(req.body);
    const token = jwtServise.creatJWT(invistoer._id);
    successResponse(res, { invistoer, token });
  } catch (error) {
    next(error);
  }
};
exports.signOut = async (req, res) => {
  try {
    successResponse(res, { message: "sign out success" });
  } catch (error) {
    next(error);
  }
};
