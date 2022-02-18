import { DeleteResult } from "typeorm";
import ICategoriaDTO from "../dtos/ICategoriaDTO";
import Categoria from "../infra/typeorm/entities/Categoria";

export default interface ICategoriaRepository {

    create(data: ICategoriaDTO): Promise<Categoria>;
    list(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria | undefined>;
    update(data: ICategoriaDTO): Promise<Categoria>;
    remove(id: number): Promise<DeleteResult>;
    
}
