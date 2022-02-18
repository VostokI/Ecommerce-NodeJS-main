import AppError from "../../../shared/errors/AppErrors";
import ICategoriaDTO from "../dtos/ICategoriaDTO";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";

export default class CreateCategoriaService {
    public async execute(data: ICategoriaDTO): Promise<Categoria> {
        const categoriaRepository = new CategoriaRepository();

        if (data.id){
            throw new AppError("ID não deve ser enviado no cadastro");
        }

        const categoria = await categoriaRepository.create(data);
        return categoria;
    }
}