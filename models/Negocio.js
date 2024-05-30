const { v4: uuid } = require('uuid');

export class Negocio {
  constructor(nome, cnpj, endereco, numero, categoria) {
    this.id = uuid()
    this.nome = nome;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.numero = numero;
    this.categoria = categoria;
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

  editarCategoria(novaCategoria) {
    this.categoria = novaCategoria;
  }
  
}
