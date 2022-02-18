import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Produto from "../../../../produtos/infra/typeorm/entities/Produto";

@Entity("categorias")
export default class categorias {

    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @Column()
    descricao: String;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
}
