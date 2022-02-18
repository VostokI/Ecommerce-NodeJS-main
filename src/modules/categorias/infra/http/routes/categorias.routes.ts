import { Router } from "express";
import CategoriasController from "../controllers/CategoriasController";

const routes = Router();

routes.post("/", CategoriasController.create);
routes.get("/", CategoriasController.list);
routes.get("/:id", CategoriasController.findById);
routes.put("/:id", CategoriasController.update);
routes.delete("/:id", CategoriasController.remove);

export default routes;