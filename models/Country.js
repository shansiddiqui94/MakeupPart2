const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = new Schema(
  {
    origin: { type: String, require: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("country", Country);
