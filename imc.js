let peso = 70;  
let altura = 1.75;  

let imc = peso / (altura * altura);

let classificacao;

if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
  classificacao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}

console.log(`IMC: ${imc.toFixed(1)} - ${classificacao}`);
