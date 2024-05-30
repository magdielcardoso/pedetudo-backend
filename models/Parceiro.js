//USUARIOS SÃO OS CLIENTES DO PEDE TUDO

const { v4: uuid } = require('uuid');

export class Parceiro {
  constructor(nome, email, senha, role, negocio) {
    this.id = uuid()
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.role = role;
    this.negocio = negocio;
  }

  editarNome(novoNome) {
    this.nome = novoNome;
  }

  editarSenha(novaSenha) {
    this.senha = novaSenha
  }

  editarEmail(novoEmail) {
    this.email = novoEmail;
  }

  editarRole(novaRole) {
    this.role = novaRole;
  }

  
}
