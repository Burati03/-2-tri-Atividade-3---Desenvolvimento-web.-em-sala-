let idade = 15;         

const diasPorAno = 365;
const horasPorDia = 24;
const minutosPorHora = 60;
const segundosPorMinuto = 60;

let diasVividos = idade * diasPorAno;

let minutosVividos = diasVividos * horasPorDia * minutosPorHora;
let segundosVividos = minutosVividos * segundosPorMinuto;

console.log(`Idade: ${idade} anos`);
console.log(`Você já viveu ${diasVividos} dias.`);
console.log(`Você já viveu ${minutosVividos} minutos.`);
console.log(`Você já viveu ${segundosVividos} segundos.`);