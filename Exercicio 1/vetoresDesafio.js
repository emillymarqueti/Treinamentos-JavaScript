const fila = ['Enzo', 'Valentina', 'Lucas'];

fila.push("Ana", "Pedro");
fila.shift();
fila.push("Matheus");

for (let i=0; i < fila.length; i++) {
    console.log(fila[i]);
}
