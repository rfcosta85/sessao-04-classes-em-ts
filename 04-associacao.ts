class Endereco {
  constructor(public rua: string, public cidade: string) {}
}

class Pessoa {
  // A classe Pessoa se relaciona com a classe Endereco
  constructor(public nome: string, public endereco: Endereco) {}

  exibirDados(): void {
    console.log(`${this.nome} mora na ${this.endereco.rua}, em ${this.endereco.cidade}.`);
  }
}

const endereco = new Endereco("Av. Paulista", "São Paulo");
const pessoa = new Pessoa("Ana", endereco);
pessoa.exibirDados();