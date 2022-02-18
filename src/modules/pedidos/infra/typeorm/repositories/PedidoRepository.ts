import IPedidoDTO from "modules/pedidos/dtos/IPedidoDTO";
import IPedidoRepository from "modules/pedidos/repositories/IPedidoRepository";
import AppError from "../../../../../shared/errors/AppErrors";
import { getRepository, Repository } from "typeorm";
import Pedido from "../entities/Pedido";


export default class PedidoRepository implements IPedidoRepository{
    private ormRepository: Repository<Pedido>;

    constructor(){
        this.ormRepository = getRepository(Pedido);
    }

    async create(data: IPedidoDTO): Promise<Pedido>{
        const pedido = this.ormRepository.create(data);
        return this.ormRepository.save(pedido);
    }

    async list(): Promise<Pedido[]>{
        const pedidos = await this.ormRepository.find();
        return pedidos;
    }

    async findById(id: number): Promise<Pedido | undefined>{
        return this.ormRepository
          .createQueryBuilder("order")
          .leftJoinAndSelect("order.pedido_produtos", "pp")
          .leftJoinAndSelect("pp.produto", "p")
          .where("order.id = :id", { id })
          .getOne();
    }

    async update(data: IPedidoDTO): Promise<Pedido>{
        const pedido = await this.ormRepository.save(data);
        return pedido;
    }

    async findByClientId(id: number): Promise<Pedido[]> {
        const pedidos = await this.ormRepository
          .createQueryBuilder("order")
          .where("order.cliente_id = :id", { id })
          .getMany();
    
        if (!pedidos) {
          throw new AppError("Cliente não possui pedidos!");
        }
    
        return pedidos;
      }

}