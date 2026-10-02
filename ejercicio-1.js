import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo: ", function(entrada) {
    const numero = Number(entrada);

    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma = suma + i;
    }

    console.log("La suma obtenida es: " + suma);

    rl.close();
});