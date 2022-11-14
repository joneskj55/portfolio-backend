const express = require("express");
const router = express.Router();

const visitorSchema = require("../models/visitor");

// create visitor
router.route("/create-visitor").post((req, res, next) => {
  visitorSchema.create(req.body, (error, data) => {
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
  visitorSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
