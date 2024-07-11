//importa a classe color e o readline
import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { Jogo } from "./src/model/Jogo";
import { Eletronico } from "./src/model/Eletronico";

//função principal
export function main() {
  let opcao, idProduto, anoLancamento, tipo, preco: number;
  let nome, modelo, tituloJogo, nomeProduto: string;
  const tipoProduto = ["Jogo", "Eletronico"];
  let produtoController: ProdutoController = new ProdutoController();

  //executa o programa até o usuario escolher sair
  while (true) {
    //mostra o menu
    console.log(
      colors.fg.magentastrong,
      colors.bg.black,
      "\n*****************************************************"
    );
    console.log("                                                     ");
    console.log("                 CASSIO ELETRONICOS                  ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Listar todos os produtos             ");
    console.log("            2 - Listar Produto pelo id               ");
    console.log("            3 - Cadastrar produto                    ");
    console.log("            4 - Atualizar produto                    ");
    console.log("            5 - Deletar Produto                      ");
    console.log("            6 - Sair                                 ");
    console.log("            7 - Consultar pelo nome do produto       ");
    console.log("*****************************************************");
    console.log(
      "                                                     ",
      colors.reset
    );

    //lê a procedimento que o usuario escolheu
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    //mostra a função sobre e finaliza o programa
    if (opcao == 6) {
      console.log(
        colors.fg.yellowstrong,
        "\nCASSIO ELETRÔNICOS - Sua fonte de eletrônicos"
      );
      console.log(colors.reset, "");
      sobre();
      process.exit(0);
    }

    //realiza o procedimento escolhido pelo usuario
    console.log(colors.fg.whitestrong, "");
    switch (opcao) {
      case 1:
        console.log("\n\nListar todos os produtos\n\n");

        produtoController.listarProdutos();
        keyPress();
        break;
      case 2:
        console.log("\n\nListar Produto pelo id\n\n");

        console.log("Digite o id do produto que deseja consultar: ");
        idProduto = readlinesync.questionInt("", {
          limitMessage: "Digite um id valido",
        });

        produtoController.consultarProdutos(idProduto);

        keyPress();
        break;
      case 3:
        console.log("\n\nCadastrar produto\n\n");

        console.log("Digite as informações do produto que deseja cadastrar: ");

        nome = readlinesync.question("\nDigite o Nome do Produto: ");

        console.log("Escolha o tipo de produto: ");
        tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

        preco = readlinesync.questionFloat("\nDigite o preco: ");

        switch (tipo) {
          case 1:
            tituloJogo = readlinesync.question("Digite o titulo do jogo: ");

            console.log("Digite o ano de lançamento do jogo");
            anoLancamento = readlinesync.questionInt("");
            produtoController.cadastrarProduto(
              new Jogo(
                produtoController.gerarId(),
                nome,
                preco,
                tipo,
                tituloJogo,
                anoLancamento
              )
            );
            break;
          case 2:
            console.log("Digite o modelo do eletronico: ");
            modelo = readlinesync.question("");
            produtoController.cadastrarProduto(
              new Eletronico(
                produtoController.gerarId(),
                nome,
                preco,
                tipo,
                modelo
              )
            );
            break;
        }
        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar produto\n\n");

        idProduto = readlinesync.questionInt("Digite o Id do Produto: ");

        let produto = produtoController.buscarNoArray(idProduto);

        if (produto !== null) {
          nome = readlinesync.question("Digite o Nome do Produto: ");

          tipo = produto.tipo;

          preco = readlinesync.questionFloat("Digite o preco: ");

          switch (tipo) {
            case 1:
              tituloJogo = readlinesync.question("Digite o titulo do jogo: ");

              console.log("Digite o ano de lançamento do jogo: ");
              anoLancamento = readlinesync.questionInt("");

              produtoController.atualizarProduto(
                new Jogo(
                  idProduto,
                  nome,
                  preco,
                  tipo,
                  tituloJogo,
                  anoLancamento
                )
              );
              break;
            case 2:
              modelo = readlinesync.question("Digite o modelo do eletronico: ");

              produtoController.atualizarProduto(
                new Eletronico(idProduto, nome, preco, tipo, modelo)
              );
              break;
          }
        } else console.log("Produto não Encontrado!");
        keyPress();
        break;
      case 5:
        console.log("\n\nDeletar Produto\n\n");

        idProduto = readlinesync.questionInt(
          "Digite o Id do Produto que deseja deletar: "
        );
        produtoController.deletarProduto(idProduto);

        keyPress();
        break;
      case 7:
        console.log("Digite o nome do produto que deseja consultar: ");
        nomeProduto = readlinesync.question("");

        produtoController.consultarPorNome(nomeProduto)
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");

        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
  console.log(
    colors.fg.magentastrong,
    "\n*****************************************************"
  );
  console.log("Projeto Desenvolvido por: Fernando");
  console.log("Fernando Cassio - fernandocassiodev@gmail.com");
  console.log("github.com/Fernandocassiodev");
  console.log("*****************************************************");
}

//solicita que o usuario pressione alguma tecla
function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

//inicia a função principal
main();
