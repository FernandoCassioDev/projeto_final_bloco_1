import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
 
  private produtos: Array<Produto> = new Array<Produto>();

  public id: number = 0;

  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto Cadastrado!`);
  }

  listarProdutos(): void {
    console.log(`Lista de produtos`);
    for (let produtos of this.produtos) {
      produtos.visualizar();
    }
  }

  consultarProdutos(idProduto: number): void {
    let resBusca = this.buscarNoArray(idProduto);

    if (resBusca !== null) {
      resBusca.visualizar();
    } else {
      console.log("Produto não encontrado!");
    }
  }
  atualizarProduto(produto: Produto): void {
    let resBusca = this.buscarNoArray(produto.id);

    if (resBusca != null) {
      this.produtos[this.produtos.indexOf(resBusca)] = produto;

      console.log("Produto atualizado");
    } else {
      console.log("Produto não encontrado!");
    }
  }
  deletarProduto(idProduto: number): void {
    let resBusca = this.buscarNoArray(idProduto);

    if (resBusca != null) {
      this.produtos.splice(this.produtos.indexOf(resBusca), 1);
      console.log("Produto deletado");
    } else {
      console.log(`Produto não encontrado`);
    }
  }

  consultarPorNome(nomeProduto: string): void {
    let buscaProduto = this.produtos.filter((c) =>
        c.nome.includes(nomeProduto)
      );
  
      buscaProduto.forEach(produto => produto.visualizar())
} 

  public gerarId(): number {
    return ++this.id;
  }

  public buscarNoArray(id: number): Produto | null {
    for (let produto of this.produtos) {
      if (produto.id === id) return produto;
    }
    return null;
  }
}
