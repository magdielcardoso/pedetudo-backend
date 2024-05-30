const { v4: uuid } = require('uuid');

export class Pedido {
  constructor(clienteId, itens, valorTotal, endereco, formaDePagamento, status) {
    this.id = uuid()
    this.clienteId = clienteId;
    this.itens = Array.isArray(itens) ? itens : []; // Verifica se itens é um array
    this.valorTotal = valorTotal;
    this.endereco = endereco;
    this.formaDePagamento = formaDePagamento;
    this.status = status;
  }

  adicionarItem(item) {
    this.itens.push(item);
    this.calcularValorTotal();
  }

  calcularValorTotal() {
    this.valorTotal = this.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  atualizarEndereco(novoEndereco) {
    this.endereco = novoEndereco;
  }

  atualizarStatus(novoStatus) {
    this.status = novoStatus;
  }

  atualizarFormaDePagamento(novaFormaDePagamento) {
    this.formaDePagamento = novaFormaDePagamento;
  }
}
