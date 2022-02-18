import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import PedidoProduto from "./PedidoProduto";
import Client from "../../../../../modules/clients/infra/typeorm/entities/Client";

@Entity("pedidos")
export default class Pedido {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  cliente_id: number;

  @Column()
  data: Date;

  @Column()
  status: string;

  @Column()
  forma_pagamento: string;

  @Column("float", { scale: 10, precision: 2 })
  valor: number;

  @Column("float", { scale: 10, precision: 2 })
  desconto: number;

  
  @ManyToOne(() => Client)
  @JoinColumn({ name: "cliente_id" })
  cliente: Client; 
 

  @OneToMany(() => PedidoProduto, (pedido_produto) => pedido_produto.pedido, {
    cascade: true,
  })
  pedido_produtos: PedidoProduto[];

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}