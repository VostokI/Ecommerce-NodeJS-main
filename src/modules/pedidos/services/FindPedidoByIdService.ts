import AppError from "../../../shared/errors/AppErrors";
import Pedido from "../infra/typeorm/entities/Pedido";
import PedidoRepository from "../infra/typeorm/repositories/PedidoRepository";

export default class FindPedidoByIdService{
    public async execute(id: number): Promise<Pedido>{
        const pedidoRepository = new PedidoRepository();
        const pedido = await pedidoRepository.findById(id);

        if (!pedido){
            throw new AppError("Pedido não Existe");

        }
        return pedido;
    }
}