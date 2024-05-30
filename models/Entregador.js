const { v4: uuid } = require('uuid');

export class Entregador {
  constructor(negocioId, nome, numero, foto) {
    this.id = uuid()
    this.negocioId = negocioId
    this.nome = nome;
    this.numero = numero
    this.foto = foto;
  }

  editarNome(novoNome) {
    this.nome = novoNome;
  }

  editarNumero(novoNumero) {
    this.numero = novoNumero;
  }

  editarFoto(novaFoto) {
    this.foto = novaFoto;
  }
}
