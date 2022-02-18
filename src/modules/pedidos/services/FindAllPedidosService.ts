import Pedido from "../infra/typeorm/entities/Pedido";
import PedidoRepository from "../infra/typeorm/repositories/PedidoRepository";

export default class FindAllPedidosService{
    public async execute(): Promise<Pedido[]> {
        const pedidoRepository = new PedidoRepository();
        const pedido = await pedidoRepository.list();
        return pedido;
    }
}