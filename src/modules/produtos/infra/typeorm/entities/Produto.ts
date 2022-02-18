import Categoria from "../../../../categorias/infra/typeorm/entities/Categoria";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import PedidoProduto from "../../../../pedidos/infra/typeorm/entities/PedidoProduto";


@Entity("produtos")
export default class Produto {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column("float", { scale: 10, precision: 2 })
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  categoria_id: number; 

  
  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  @JoinColumn({ name: "categoria_id" })
  categoria: Categoria; // categoria não é um produto no banco de dados
  // representa o relacionamento

  @OneToMany(() => PedidoProduto, (pedido_produto) => pedido_produto.produto)
  pedido_produtos: PedidoProduto[];

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}