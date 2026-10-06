function calcular(valor: number): number;
function calcular(valor: number, taxa: number): number;

function calcular(valor: number, taxa?: number): number {
    return taxa
        ? valor * taxa
        : valor;
}

