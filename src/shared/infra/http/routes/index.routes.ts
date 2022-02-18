import { Router } from "express";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoriasRoutes from "../../../../modules/categorias/infra/http/routes/categorias.routes";
import produtosRoutes from "../../../../modules/produtos/infra/http/routes/produtos.routes";
import pedidosRoutes from "../../../../modules/pedidos/infra/http/routes/pedidos.routes";



const routes = Router();

routes.use("/clientes", clientsRoutes);
routes.use("/categorias", categoriasRoutes);
routes.use("/produtos", produtosRoutes);
routes.use("/pedidos", pedidosRoutes);


export default routes;
