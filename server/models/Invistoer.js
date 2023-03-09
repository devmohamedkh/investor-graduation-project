const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var InvistorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Invistor", InvistorSchema);
