import { DeleteResult } from "typeorm";
import IProdutoDTO from "../dtos/IProdutoDTO";
import Produto from "../infra/typeorm/entities/Produto";

export default interface IProdutoRepository{
    create(data: IProdutoDTO): Promise<Produto>;
    list(): Promise<Produto[]>;
    findById(id: number): Promise<Produto | undefined>;
    update(data: IProdutoDTO): Promise<Produto>;
}