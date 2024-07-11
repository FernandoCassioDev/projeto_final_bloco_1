import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  //métodos CRUD
  cadastrarProduto(produto: Produto): void;
  listarProdutos(): void;
  consultarProdutos(idProduto: number): void;
  atualizarProduto(idProduto: number, novoProduto: Produto): void;
  deletarProduto(idProduto: number): void;
}