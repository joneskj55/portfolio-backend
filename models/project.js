const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
