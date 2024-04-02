const express = require("express");
const {
  getAllOrders,
  getOrderById,
  getOrderByUserEmail,
  deleteOrder,
  addOrder,
} = require("../controllers/orderControllers");
const ordersRouter = express.Router();

ordersRouter.post("/add", addOrder);
ordersRouter.get("/", getAllOrders);
ordersRouter.get("/:id", getOrderById);
// ordersRouter.get('/user/:Email', getOrderByUserEmail);
// ordersRouter.delete("/:id", deleteOrder)
ordersRouter.delete("/:id/cancel", deleteOrder);

module.exports = ordersRouter;
