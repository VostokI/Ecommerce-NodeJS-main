import { DeleteResult } from "typeorm";
import Pedido from "../infra/typeorm/entities/Pedido";
import IPedidoDTO from "../dtos/IPedidoDTO";

export default interface IPedidoRepository{
    create(data: IPedidoDTO): Promise<Pedido>;
    list(): Promise<Pedido[]>;
    findById(id: number): Promise<Pedido | undefined>;
    update(data: IPedidoDTO): Promise<Pedido>;
    findByClientId(id: number): Promise<Pedido[]>;
    
}