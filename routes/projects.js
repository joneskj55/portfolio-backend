const express = require("express");
const router = express.Router();

const Project = require("../models/project");

// create project
router.route("/create-project").post((req, res, next) => {
  Project.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// get project
router.route("/").get((req, res) => {
  Project.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
