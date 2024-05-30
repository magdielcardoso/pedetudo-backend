export class Avaliacao {
  constructor(usuarioId, negocioId, pedidoId, estrelas, comentario) {
    this.usuarioId = usuarioId
    this.negocioId = negocioId;
    this.pedidoId = pedidoId
    this.estrelas = estrelas;
    this.comentario = comentario
  }

  editarEstrelas(novasEstrelas) {
    this.estrelas = novasEstrelas;
  }

  editarComentario(novoComentario) {
    this.comentario = novoComentario;
  }
}
