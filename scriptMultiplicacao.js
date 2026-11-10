function calcularTabuada() {

let numero = Number(document.getElementById("numero").value);
let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

if (numero < 1 || numero > 10 || numero === 0) { resultado.innerHTML = "Digite um número de 1 a 10!";
 return; }

for (let i = 1; i <= 10; i++) {

let calculo = numero * i;

resultado.innerHTML += numero + " x " + i + " = " + calculo + "<br>";
    }
}