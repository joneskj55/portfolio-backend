const express = require("express");
const router = express.Router();

const Visitor = require("../models/visitor");

// create visitor
router.route("/create-visitor").post((req, res, next) => {
  Visitor.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// get list of visitors
router.route("/").get((req, res) => {
  Visitor.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
