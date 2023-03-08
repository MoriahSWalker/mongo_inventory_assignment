const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  price: Number,
  inventory: Number,
  nextDelivery: Date,
  deliveryAmt: Number,
  name: String,
});

const items = mongoose.model("items", itemSchema);

module.exports = items;
