import Produto from "../../../../produtos/infra/tpeorm/entities/Produto";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import Pedido from "./Pedido"

@Entity("pedido_produto")
export default class PedidoProduto {
  @PrimaryColumn()
  pedido_id: number;

  @PrimaryColumn()
  produto_id: number;

  @Column()
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.pedido_produtos, {
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "pedido_id" })
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.pedido_produtos, {
    orphanedRowAction: "delete",
  })
  @JoinColumn({ name: "produto_id" })
  produto: Produto;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}