const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    tech: { type: String, required: true },
    year: {type: String, required: true },
    deployed: {type: String, required: true },
    repo: {type: String, required: true },
    img: {type: String, required: true },
    private: {type: Boolean, required: false },
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
