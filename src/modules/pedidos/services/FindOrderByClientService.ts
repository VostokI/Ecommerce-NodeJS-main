import AppError from "../../../shared/errors/AppErrors";
import Pedido from "../infra/typeorm/entities/Pedido";
import PedidoRepository from "../infra/typeorm/repositories/PedidoRepository";

export default class FindOrderByClientService {
  public async execute(id: number): Promise<Pedido[]> {
    const orderRepository = new PedidoRepository();

    const pedidos = await orderRepository.findByClientId(id);

    return pedidos;
  }
}
