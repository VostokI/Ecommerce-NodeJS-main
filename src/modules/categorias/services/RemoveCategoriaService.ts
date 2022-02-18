import { DeleteResult } from "typeorm";
import AppError from "shared/errors/AppErrors";
import Categoria from "../infra/typeorm/entities/Categoria";
import CategoriaRepository from "../infra/typeorm/repositories/CategoriaRepository";
import FindCategoriaByIdService from "./FindCategoriaByIdService";

export default class RemoveCategoriaService {
    public async execute(id:number): Promise<DeleteResult> {
        const categoriaRepository = new CategoriaRepository();
        const findCategoriaByIdService = new FindCategoriaByIdService();
        await findCategoriaByIdService.execute(id);
        const result = await categoriaRepository.remove(id);
        return result;
    }
}