const carros = ['Gol', 'Uno', 'Palio', 'Celta'];

console.log("Primeiro elemento");
console.log(carros[0]);
console.log("Segundo elemento");
console.log(carros[1]);

for (let i=0; i < carros.length; i++) {
    console.log(carros[i]);
}

for (item of carros) {
    console.log(item);
}