// Procedural
const nomeAluno = "João";
let nota = 15;

function alterarNota(novaNota: number) {
    nota = novaNota;
}

function mostrarAluno() {
    console.log(nomeAluno, nota);
}



// O.O

class Aluno {
    nome: string;
    nota: number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

    alterarNota(novaNota: number) {
        this.nota = novaNota;
    }

    mostrarAluno() {
        console.log(this.nome, this.nota);
    }
}

let aluno1 = new Aluno("Maria", 18);

console.log(aluno1.nome);
console.log(aluno1.nota);

aluno1.alterarNota(20);
aluno1.mostrarAluno();