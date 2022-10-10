const express = require("express");
const router = express.Router();

const db = require("../config/mongoose");
const Todo = require("../models/todo");

const homeController = require("../controller/homeController");

router.get("/", homeController.home);
router.post("/add", homeController.add);
router.post("/done", homeController.done);
router.post("/remove", homeController.remove);
router.post("/notdone", homeController.notdone);

module.exports = router;
