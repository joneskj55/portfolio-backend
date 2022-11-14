const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    collection: "visitors",
  }
);

module.exports = mongoose.model("Visitor", VisitorSchema);
