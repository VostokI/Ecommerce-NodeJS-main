import IProdutoDTO from "modules/produtos/dtos/IProdutoDTO";
import IProdutoRepository from "modules/produtos/repositories/IProdutoRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Produto from "../entities/Produto";

export default class ProdutoRepository implements IProdutoRepository{
    private ormRepository: Repository<Produto>;

    constructor(){
        this.ormRepository = getRepository(Produto);
    }

    async create(data: IProdutoDTO): Promise<Produto>{
        const produto = this.ormRepository.create(data);
        return this.ormRepository.save(produto);
    }

    async list(): Promise<Produto[]>{
        const produtos = await this.ormRepository.find();
        return produtos;
    }

    async findById(id: number): Promise<Produto | undefined>{
        const produto = await this.ormRepository.findOne(id);
        return produto;
    }

    async update(data: IProdutoDTO): Promise<Produto>{
        const produto = await this.ormRepository.save(data);
        return produto;
    }

}