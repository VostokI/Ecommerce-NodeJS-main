import ICategoriaDTO from "modules/categorias/dtos/ICategoriaDTO";
import ICategoriaRepository from "modules/categorias/repositories/ICategoriaRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Categoria from "../entities/Categoria";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientRepository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
 export default class CategoriaRepository implements ICategoriaRepository {
    private ormRepository: Repository<Categoria>;

    constructor() {
        this.ormRepository = getRepository(Categoria);
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.ormRepository.delete(id);
    }

    async update(data: ICategoriaDTO): Promise<Categoria> {
        const categoria = await this.ormRepository.save(data);
        return categoria;
    }

    async findById(id: number): Promise<Categoria | undefined> {
        const categoria = await this.ormRepository.findOne(id);
        return categoria;
    }

    async list(): Promise<Categoria[]> {
        const categoria = await this.ormRepository.find();
        return categoria;
    }

    async create(data: ICategoriaDTO): Promise<Categoria> {
        const categoria = this.ormRepository.create(data);
        return this.ormRepository.save(categoria);
    }
 }