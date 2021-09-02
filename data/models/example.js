const { Schema, model } = require('mongoose');

const example = new Schema({
  exampleString: String,
  exampleNumber: Number,
  exampleArray: Array,
  exampleBoolean: Boolean,
}, { collection: "Example" });

module.exports = model("Example", example);
