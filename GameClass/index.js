class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo.toLowerCase() == "mago") {
      console.log(`O ${this.tipo} ${this.nome} atacou usando magia`);
    } 
    else if (this.tipo.toLowerCase() == "guerreiro") {
      console.log(`O ${this.tipo} ${this.nome} atacou usando espada`);
    }
    else if (this.tipo.toLowerCase() == "monge") {
      console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais`);
    }
    else if (this.tipo.toLowerCase() == "ninja") {
      console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken`);
    }
  }
}

let hero = new Heroi("João", 9, "NinJa");
