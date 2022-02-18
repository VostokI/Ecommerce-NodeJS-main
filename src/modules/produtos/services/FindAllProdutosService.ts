import Produto from "../infra/typeorm/entities/Produto";
import ProdutoRepository from "../infra/typeorm/repositories/ProdutoRepository";

export default class FindAllProdutosService{
    public async execute(): Promise<Produto[]> {
        const produtoRepository = new ProdutoRepository();
        const produtos = await produtoRepository.list();
        return produtos;
    }
}