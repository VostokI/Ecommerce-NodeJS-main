import { Request, Response } from "express";
import FindAllCategoriasService from "../../../services/FindAllCategoriasService";
import FindCategoriaByIdService from "../../../services/FindCategoriaByIdService";
import CreateCategoriaService from "../../../services/CreateCategoriaService";
import UpdateCategoriaService from "../../../services/UpdateCategoriaService";
import RemoveCategoriaService from "../../../services/RemoveCategoriaService"

class CategoriasController {
    async create(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const createCategoriasService = new CreateCategoriaService();
        const categoria = await createCategoriasService.execute(data);
        return response.json(categoria);
    }

    async list(request: Request, response: Response): Promise<Response>{
        const listAllCategoriasService = new FindAllCategoriasService();
        const categorias = await listAllCategoriasService.execute();
        return response.json(categorias);

    }
    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const findCategoriaById = new FindCategoriaByIdService();
    
        const categoria = await findCategoriaById.execute(Number(id));
    
        return response.json(categoria);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const { id } = request.params; // desestruturação
    
        const updateCategoriaService = new UpdateCategoriaService();
    
        const data_to_update = {
          ...data, // rest / spread operator
          id: Number(id),
        };
    
        const categoria = await updateCategoriaService.execute(data_to_update);
    
        return response.json(categoria);
    }

    async remove(request: Request, response: Response): Promise<Response>{
        const id = request.params;
        const removeCategoriaService = new RemoveCategoriaService();
        const result = await removeCategoriaService.execute(Number(id));
        return response.json(result);

    }
      



}
export default new CategoriasController();