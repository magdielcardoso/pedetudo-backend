const { v4: uuid } = require('uuid');

export class Desconto {
  constructor(valor) {
    this.id = uuid()
    this.valor = valor;
  }

  editarValor(novoValor) {
    this.valor = novoValor;
  }

  calcularDesconto(valorInicial){
    if (this.valor > valorInicial) {
      throw new Error("Valor do cupom não pode ser maior que o valor do pedido");
    }
    return valorInicial - this.valor;
  }
}
