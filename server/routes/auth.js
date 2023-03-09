const app = require("express").Router();
const authController = require("../controllers/Auth");

app.post("/signup", authController.signup);
app.post("/signin", authController.signin);
app.post("/signout", authController.signOut);
// app.post("/forgot", authController.forgot);
// app.post("/reset-password", authController.resetPassword);
// app.post("/change-password", authController.changePassword);
module.exports = app;
