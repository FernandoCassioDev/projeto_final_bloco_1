import { Produto } from "./Produto";

export class Eletronico extends Produto {
  private _modelo: string;

  constructor(
    id: number,
    nome: string,
    preco: number,
    tipo: number,
    modelo: string
  ) {
    super(id, nome, tipo, preco);
    this._modelo = modelo;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public set modelo(value: string) {
    this._modelo = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Modelo: ${this._modelo}`);
  }
}
