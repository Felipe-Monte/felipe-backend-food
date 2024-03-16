const { Router } = require("express");

const OrdersController = require("../controllers/OrdersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const checkAdmin = require("../middlewares/checkAdmin");

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.get("/", ordersController.index);
ordersRoutes.post("/", ordersController.create);
ordersRoutes.get("/:id", ordersController.show);
ordersRoutes.delete("/:id", checkAdmin, ordersController.delete);
ordersRoutes.patch("/:id", checkAdmin, ordersController.update);

module.exports = ordersRoutes;