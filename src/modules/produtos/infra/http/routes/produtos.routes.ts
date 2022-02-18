import { Router } from "express";
import ProdutosController from "../controllers/ProdutosController";

const routes = Router();

routes.post("/", ProdutosController.create);
routes.get("/", ProdutosController.list);
routes.get("/:id", ProdutosController.findById);
routes.put("/:id", ProdutosController.update);


export default routes;