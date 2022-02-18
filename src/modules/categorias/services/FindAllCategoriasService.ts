import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";

export default class FindAllCategoriasService {
    public async execute(): Promise<Categoria[]>{
        const categoriaRepository = new CategoriaRepository();
        const categorias = await categoriaRepository.list();
        return categorias;
    }
}