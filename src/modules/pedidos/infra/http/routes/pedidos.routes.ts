import { Router } from "express";
import PedidosController from "../controllers/PedidosController";

const routes = Router();

routes.post("/", PedidosController.create);
routes.get("/", PedidosController.list);
routes.get("/:id", PedidosController.findById);
routes.get("/cliente/:id", PedidosController.findByClientId);
routes.put("/:id", PedidosController.update);

export default routes;