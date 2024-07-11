import { Produto } from "./Produto";

export class Jogo extends Produto {
  private _titulo: string;
  private _anoLancamento: number;

  constructor(
    id: number,
    nome: string,
    preco: number,
    tipo: number,
    titulo: string,
    anoLancamento: number
  ) {
    super(id, nome, tipo, preco);
    this._titulo = titulo;
    this._anoLancamento = anoLancamento;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public get anoLancamento(): number {
    return this._anoLancamento;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public set anoLancamento(value: number) {
    this._anoLancamento = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Titulo: ${this._titulo}`);
    console.log(`Ano de lançamento: ${this._anoLancamento}`);
  }
}
