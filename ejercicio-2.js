import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el gasto diario de transporte: ", function(entrada) {
    const gastoDiario = Number(entrada);

    let gastoTotal = 0;

    for (let dia = 1; dia <= 6; dia++) {
        gastoTotal = gastoTotal + gastoDiario;

        console.log("Día " + dia + ": gasto acumulado = $" + gastoTotal.toFixed(2));
    }

    console.log("Gasto total: $" + gastoTotal.toFixed(2));

    rl.close();
});