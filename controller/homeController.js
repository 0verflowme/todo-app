const db = require("../config/mongoose");
const Todo = require("../models/todo");

//defining functions of all routes here

function home(req, res) {
  Todo.find({}, (err, todoList) => {
    if (err) {
      console.error("Error occurred in display display todo");
      return;
    }
    return res.render("home", {
      title: "TodoList",
      todoList: todoList,
    });
  });
}

function add(req, res) {
  var desc = req.body.desc;
  Todo.create(
    {
      desc: desc,
      done: false,
    },
    (err, todo) => {
      if (err) {
        console.error("Error");
        return;
      }
      return res.redirect("back");
    }
  );
}

function done(req, res) {
  var id = req.body.id.trim();
  Todo.updateOne({ _id: id }, { $set: { done: true } }, (err, todo) => {
    if (err) {
      console.log("Something went wring in updating");
    }
  });
  return res.redirect("back");
}

function remove(req, res) {
  var id = req.body.id.trim();
  Todo.deleteOne(
    {
      _id: id,
    },
    (err) => {
      if (err) {
        console.log("Something went wrong in deleting from db");
      }
      return res.redirect("back");
    }
  );
}

function notdone(req, res) {
  var id = req.body.id.trim();
  Todo.updateOne({ _id: id }, { $set: { done: false } }, (err, todo) => {
    if (err) {
      console.log("Something went wring in updating");
    }
  });
  return res.redirect("back");
}

module.exports = { home, add, done, remove, notdone };
