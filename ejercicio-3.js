import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de entradas vendidas diariamente: ", function(entrada) {
    const entradasDiarias = Number(entrada);

    let totalEntradas = 0;

    for (let dia = 1; dia <= 5; dia++) {
        totalEntradas = totalEntradas + entradasDiarias;
    }

    console.log("Total de entradas vendidas: " + totalEntradas);

    rl.close();
});