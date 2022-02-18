import AppError from "../../../shared/errors/AppErrors";
import ICategoriaDTO from "../dtos/ICategoriaDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";
import FindCategoriaByIdService from "./FindCategoriaByIdService";

export default class UpdateCategoriaService {
    public async execute(data: ICategoriaDTO): Promise<Categoria>{
        const categoriaRepository = new CategoriaRepository();
        const findCategoriaById = new FindCategoriaByIdService();

        if (!data.id){
            throw new AppError("Atualização precisa do id da categoria");
        }
        await findCategoriaById.execute(data.id);
        const categoria = await categoriaRepository.update(data);
        return categoria;
    }
}
