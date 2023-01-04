const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    tech: { type: Array },
    year: { type: String },
    deployed: { type: Array },
    repo: { type: String },
    img: { type: String },
    private: { type: Boolean, default: false, required: false },
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
