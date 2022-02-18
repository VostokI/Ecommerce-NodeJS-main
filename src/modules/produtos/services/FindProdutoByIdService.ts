import AppError from "../../../shared/errors/AppErrors";
import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";

export default class FindProdutoByIdService{
    public async execute(id: number): Promise<Produto>{
        const produtoRepository = new ProdutoRepository();
        const produto = await produtoRepository.findById(id);

        if (!produto){
            throw new AppError("Produto não Existe");
        }

        return produto;
    }
}