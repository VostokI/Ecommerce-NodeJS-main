import Produto from "../infra/tpeorm/entities/Produto";
import ProdutoRepository from "../infra/tpeorm/repositories/ProdutoRepository";

export default class FindAllProdutosService{
    public async execute(): Promise<Produto[]> {
        const produtoRepository = new ProdutoRepository();
        const produtos = await produtoRepository.list();
        return produtos;
    }
}