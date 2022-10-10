//Connection to database.
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo_list_db");

const db = mongoose.connection;

db.on("err", console.error.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Connection Successful");
});