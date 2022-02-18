import AppError from "../../../shared/errors/AppErrors";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";

export default class FindCategoriaByIdService {
    static execute: any;
    
    public async execute(id: number): Promise<Categoria> {
        const categoriaRepository = new CategoriaRepository();
        const categoria = await categoriaRepository.findById(id);

        if (!categoria){
            throw new AppError("Categoria não Existe");
        }
        return categoria;
    }
}