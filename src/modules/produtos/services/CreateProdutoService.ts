import FindCategoriaByIdService from "../../categorias/services/FindCategoriaByIdService";
import AppError from "../../../shared/errors/AppErrors";
import IProdutoDTO from "../dtos/IProdutoDTO";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";

export default class CreateProdutoService{
    public async execute(data: IProdutoDTO): Promise<Produto>{
        const produtoRepository = new ProdutoRepository();

        if (data.id) {
            throw new AppError("ID não deve ser enviado no cadastro");
        }
        
        

        const produto = await produtoRepository.create(data);
        return produto;
    }
}