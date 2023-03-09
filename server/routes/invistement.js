const app = require("express").Router();
const invistementController = require("../controllers/Invistement");

app.get("/", invistementController.getAllInvistements);
app.get("/invistor/:id", invistementController.getInvistorInvistemts);
app.get("/:id", invistementController.getInvistementById);

app.post("/", invistementController.addInvistement);
app.patch("/:id", invistementController.updateInvistementById);
app.delete("/:id", invistementController.deleteInvistementById);
app.get("/project/:id", invistementController.getInvistementByProjectId);

module.exports = app;
