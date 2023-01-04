const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    tech: {type: String, required: true},
    year: {type: String},
    deployed: {type: String},
    repo: {type: String},
    img: {type: String},
    private: {type: Boolean,},
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
