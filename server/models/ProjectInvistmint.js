const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var invistementSchema = new mongoose.Schema({
  quentity: {
    type: Number,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  invistorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invistor",
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("Invistement", invistementSchema);
