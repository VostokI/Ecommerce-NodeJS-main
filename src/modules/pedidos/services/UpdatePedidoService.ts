import AppError from "../../../shared/errors/AppErrors";
import Pedido from "../infra/typeorm/entities/Pedido";
import PedidoRepository from "../infra/typeorm/repositories/PedidoRepository";
import IPedidoDTO from "../dtos/IPedidoDTO";
import FindPedidoByIdService from "./FindPedidoByIdService";

export default class UpdatePedidoService{
    public async execute(data: IPedidoDTO): Promise<Pedido>{
        const pedidoRepository = new PedidoRepository();
        const findPedidoById = new FindPedidoByIdService();

        if (!data.id){
            throw new AppError("Atualização precisa do id do pedido");
        }
        await findPedidoById.execute(data.id);
        const pedido = await pedidoRepository.update(data);
        return pedido;
    }
}