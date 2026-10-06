// Define uma abstração básica
abstract class FormaGeometrica {
  // Método abstrato sem implementação (obrigatório para as classes filhas)
  abstract calcularArea(): number;
}

class Quadrado extends FormaGeometrica {
  constructor(private lado: number) {
    super();
  }

  // Implementação dos detalhes específicos do cálculo
  calcularArea(): number {
    return this.lado * this.lado;
  }
}

const quadrado = new Quadrado(5);
console.log(quadrado.calcularArea()); // Output: 25