//CLIENTES SÃO OS CLIENTES DO NEGÓCIO

const { v4: uuid } = require('uuid');

export class Cliente {
  constructor(nome, endereco, numero) {
    this.id = uuid()
    this.nome = nome;
    this.endereco = endereco;
    this.numero = numero;
  }

  editarNome(novoNome) {
    this.nome = novoNome;
  }

  editarEndereco(novoEndereco) {
    this.endereco = novoEndereco
  }

  editarNumero(novoNumero) {
    this.numero = novoNumero;
  }
}
