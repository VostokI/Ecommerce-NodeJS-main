import AppError from "../../../shared/errors/AppErrors";
import IProdutoDTO from "../dtos/IProdutoDTO";
import Produto from "../infra/tpeorm/entities/Produto";
import ProdutoRepository from "../infra/tpeorm/repositories/ProdutoRepository";
import FindProdutoByIdService from "./FindProdutoByIdService";
import FindCategoriaByIdService from "../../categorias/services/FindCategoriaByIdService";

export default class UpdateProdutoService {
    public async execute(data: IProdutoDTO): Promise<Produto> {
        const produtoRepository = new ProdutoRepository();
        const findProdutoById = new FindProdutoByIdService();

        if (!data.id){
            throw new AppError("Atualização precisa do id do produto");
        }
        await findProdutoById.execute(data.id);
        const produto = await produtoRepository.update(data);
        return produto;

    }
}