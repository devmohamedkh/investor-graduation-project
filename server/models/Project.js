const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  logo: {
    type: String,
    required: true,
  },
  backgroundImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  idea: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  investors: {
    type: Number,
  },
  target: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  sharePrice: {
    type: Number,
    required: true,
  },
  preMoneyValuation: {
    type: Number,
  },
});

//Export the model
module.exports = mongoose.model("Project", ProjectSchema);
