class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria(100);
conta.depositar(50);
console.log(conta.getSaldo()); // Output: 150
// conta.saldo = 1000; // Erro de compilação: 'saldo' é privado!