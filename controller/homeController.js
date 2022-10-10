const { ObjectID } = require("bson");
const { ftruncate } = require("fs");
const { default: mongoose, ObjectId } = require("mongoose");
const db = require("../config/mongoose");
const { collection } = require("../models/todo");
const Todo = require("../models/todo");

function home(req, res) {
  Todo.find({}, (err, todoList) => {
    if (err) {
      console.error("Error occured in display display todo");
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
      //   console.log(todo);
      return res.redirect("back");
    }
  );
}

function done(req, res) {
  //   console.log(req.body.id);
  //   var filter = { _id: req.body.id };
  var id = req.body.id.trim();
  Todo.updateOne(
    { _id: new ObjectID(id) },
    { $set: { done: true } },
    (err, todo) => {
      if (err) {
        console.log("Something went wring in updating");
      }
    }
  );
  return res.redirect("back");
}

function remove(req, res) {
  console.log("here");
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
  //   console.log(req.body.id);
  //   var filter = { _id: req.body.id };
  var id = req.body.id.trim();
  Todo.updateOne(
    { _id: new ObjectID(id) },
    { $set: { done: false } },
    (err, todo) => {
      if (err) {
        console.log("Something went wring in updating");
      }
    }
  );
  return res.redirect("back");
}

module.exports = { home, add, done, remove, notdone };
