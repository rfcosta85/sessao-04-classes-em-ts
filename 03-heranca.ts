class Veiculo {
  constructor(public marca: string, public modelo: string) {}

  ligar(): void {
    console.log(`${this.marca} ${this.modelo} está ligado.`);
  }
}

class Carro extends Veiculo {
  public quantidadeDePortas: number;

  constructor(marca: string, modelo: string, quantidadeDePortas: number) {
    super(marca, modelo); 
    this.quantidadeDePortas = quantidadeDePortas;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 4);
meuCarro.ligar();