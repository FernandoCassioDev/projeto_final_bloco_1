//importa a classe color e o readline
import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";

//função principal
export function main() {
  let opcao: number;
  const tipoContas = ["Conta Corrente", "Conta Poupança"];

  //executa o programa até o usuario escolher sair
  while (true) {
    //mostra o menu
    console.log(
      colors.fg.yellow,
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
    console.log("            6 - Sair                                ");
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
        "\nCASSIO ELETRONICOS - Sua fonte de eletrônicos"
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

        keyPress();
        break;
      case 2:
        console.log("\n\nListar Produto pelo id\n\n");

        keyPress();
        break;
      case 3:
        console.log("\n\nCadastrar produto\n\n");

        break;
      case 4:
        console.log("\n\nAtualizar produto\n\n");


        keyPress();
        break;
      case 5:
        console.log("\n\nDeletar Produto\n\n");

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
  console.log("\n*****************************************************");
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
