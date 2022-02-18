import IPedidoProdutoDTO from "./IPedidoProdutoDTO";

export default interface IPedidoDTO {
    id: number;
    client_id: number;
    status: string;
    forma_pagamento: string;
    valor: number;
    desconto?: number;
    data: Date;
    pedido_produtos: IPedidoProdutoDTO[];
  }