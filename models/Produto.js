const { v4: uuid } = require('uuid');

export class Produto {
  constructor(nome, descricao, preco, categoria, ingredientes, foto) {
    this.id = uuid()
    this.nome = nome;
    this.descricao = descricao
    this.preco = preco;
    this.categoria = categoria;
    this.ingredientes = ingredientes;
    this.foto = foto;
  }

  editarNome(novoNome) {
    this.nome = novoNome
  }

  editarDescricao(novaDescricao) {
    this.descricao = novaDescricao;
  }

  editarPreco(novoPreco) {
    this.preco = novoPreco;
  }

  editarCategoria(novaCategoria) {
    this.categoria = novaCategoria;
  }
  
  editarFoto(novaFoto) {
    this.foto = novaFoto;
  }
}
