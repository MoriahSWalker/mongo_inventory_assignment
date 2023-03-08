const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const items = require("./models/items");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.vc6edgd.mongodb.net/Inventory?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.post("/create_item", async (req, res) => {
  const {
    price: price,
    inventory: inventory,
    nextDelivery: nextDelivery,
    deliveryAmt: deliveryAmt,
    name: name,
  } = req.body;
  let returnedValue = await items.create({
    price,
    inventory,
    nextDelivery,
    deliveryAmt,
    name,
  });
  console.log(returnedValue);
  if (returnedValue) {
    console.log("upload complete");
  }
  res.send(returnedValue);
});

app.listen(3000, () => {
  console.log(`Server is Listening on 3000`);
});
