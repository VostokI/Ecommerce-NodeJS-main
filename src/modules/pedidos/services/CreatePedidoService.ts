import AppError from "../../../shared/errors/AppErrors";
import IPedidoDTO from "../../pedidos/dtos/IPedidoDTO";
import Pedido from "../infra/typeorm/entities/Pedido";
import PedidoRepository from "../infra/typeorm/repositories/PedidoRepository";
import Produto from "../../produtos/infra/typeorm/entities/Produto";
import FindProdutoByIdService from "../../produtos/services/FindProdutoByIdService";
import FindOrderByIdService from "../../pedidos/services/FindOrderByClientService";
import FindClientByIdService from "../../clients/services/FindClientByIdService";

export default class CreatePedidoService {
  productRepository: any;
  public async execute(data: IPedidoDTO): Promise<Pedido | Produto> {
    const orderRepository = new PedidoRepository();
    const produto = new FindProdutoByIdService();
    const cliente = new FindClientByIdService();
    let soma = 0;

    
    if (data.id) {
      throw new AppError("ID não deve ser enviado no cadastro");
    }

    
    if (data.pedido_produtos.length === 0) {
      throw new AppError("O pedido deve ter pelo menos um produto informado");
    }

    for (var i = 0; i < data.pedido_produtos.length; i++) {
      
      if (data.pedido_produtos[i].quantidade <= 0) {
        throw new AppError("A quantidade do produto deve ser superior a zero");
      }

     
      let produtos = await produto.execute(data.pedido_produtos[i].produto_id);

      if (data.pedido_produtos[i].produto_id === produtos.id) {
        if (data.pedido_produtos[i].quantidade > produtos.quantidade) {
          throw new AppError("Quantidade insuficiente em estoque");
        }
      }

      
      soma += data.pedido_produtos[i].quantidade * produtos.preco;
    }

    const data_new = {
      ...data,
      valor: soma,
    };

    const order = await orderRepository.create(data_new);

    return order;
  }
}
