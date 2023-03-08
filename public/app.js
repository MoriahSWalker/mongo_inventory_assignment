console.log("js file connected");

const newItem = {
  price,
  inventory,
  nextDelivery,
  deliveryAmt,
  name,
};

fetch("http://localhost:3000/create_item", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newItem),
});
