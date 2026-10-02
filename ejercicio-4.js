import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de productos elaborados por día: ", function(entrada) {
    const productosDiarios = Number(entrada);

    let produccionTotal = 0;

    for (let dia = 1; dia <= 7; dia++) {
        produccionTotal = produccionTotal + productosDiarios;
    }

    console.log("Producción total de la semana: " + produccionTotal);

    rl.close();
});