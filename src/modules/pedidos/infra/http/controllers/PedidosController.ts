import { Request, Response } from "express";
import CreatePedidoService from "../../../services/CreatePedidoService";
import UpdatePedidoService from "../../../services/UpdatePedidoService";
import FindAllPedidosService from "../../../services/FindAllPedidosService";
import FindPedidoByIdService from "../../../services/FindPedidoByIdService";



class PedidosController{
    async create(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const createPedidoService = new CreatePedidoService();
        const pedido = await createPedidoService.execute(data);
        return response.json(pedido);
    } 

    async list(request: Request, response: Response): Promise<Response>{
        const listAllPedidosService = new FindAllPedidosService();
        const pedidos = await listAllPedidosService.execute();
        return response.json(pedidos);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const findPedidoById = new FindPedidoByIdService();
        const pedido = await findPedidoById.execute(Number(id));
        return response.json(pedido);
    }

    async update(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const { id } = request.params;
        const updatePedidoService = new UpdatePedidoService();
        const data_to_update ={
          ...data, // rest / spread operator
          id: Number(id),
        }
        const pedido = await updatePedidoService.execute(data_to_update);
        return response.json(pedido);
    }

    async findByClientId(request: Request, response: Response) {
        const { id } = request.params;
    
        const pedidos = await new FindPedidoByIdService().execute(Number(id));
    
        return response.json(pedidos);
      }

}
export default new PedidosController();