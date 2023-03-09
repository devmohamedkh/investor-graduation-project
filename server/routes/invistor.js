const app = require("express").Router();

const invistorController = require("../controllers/Invistor");

app.get("/", invistorController.getAllInvestors);
app.get("/:id", invistorController.getInvestorById);
app.get("/:name", invistorController.getInvestorByName);
app.post("/", invistorController.addInvestor);
app.patch("/:id", invistorController.updateInvestor);
app.delete("/:id", invistorController.deleteInvestor);

module.exports = app;
