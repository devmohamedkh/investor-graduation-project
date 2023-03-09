const app = require("express").Router();
const projectController = require("../controllers/Project");
const uplodeImge = require("../utils/helpers/uplodeImge");

app.get("/", projectController.getAllProjects);
app.get("/name/:name", projectController.getProjectsByName);
app.get("/:id", projectController.getProjectById);

app.post(
  "/",
  uplodeImge.fields([
    { name: "logo", maxCount: 1 },
    { name: "backgroundImg", maxCount: 1 },
  ]),
  projectController.addProject
);
app.patch("/:id", projectController.updateProject);
app.delete("/:id", projectController.RemoveProjectById);

module.exports = app;
