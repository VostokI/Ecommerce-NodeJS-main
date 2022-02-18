import { Request, Response } from "express";
import FindAllProdutosService from "../../../services/FindAllProdutosService";
import CreateProdutoService from "../../../services/CreateProdutoService";
import FindProdutoByIdService from "../../../services/FindProdutoByIdService";
import UpdateProdutoService from "../../../services/UpdateProdutoService";

class ProdutosController{
    async create(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const createProdutoService = new CreateProdutoService();
        const produto = await createProdutoService.execute(data);
        return response.json(produto);
    } 

    async list(request: Request, response: Response): Promise<Response>{
        const listAllProdutosService = new FindAllProdutosService();
        const produtos = await listAllProdutosService.execute();
        return response.json(produtos);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const findProdutoById = new FindProdutoByIdService();
        const produto = await findProdutoById.execute(Number(id));
        return response.json(produto);
    }

    async update(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const { id } = request.params;
        const updateProdutoService = new UpdateProdutoService();
        const data_to_update ={
          ...data, // rest / spread operator
          id: Number(id),
        }
        const produto = await updateProdutoService.execute(data_to_update);
        return response.json(produto);
    }
}
export default new ProdutosController();