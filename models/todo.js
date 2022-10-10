//Defining schema and fields for database.
const mongoose = require("mongoose");
const totSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const Todo = mongoose.model("Todo", totSchema);
module.exports = Todo;
