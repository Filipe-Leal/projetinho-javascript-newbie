let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let saida = document.getElementById('saida');

let resultado = document.createElement('option');
saida.appendChild(resultado);

function calcular(){
  let imc = peso.value / (altura.value * altura.value);
  
  resultado.innerHTML = `Seu IMC é ${imc}`;
}

function limpar(){
  altura.value = ``;
  peso.value = ``;
  resultado.innerHTML = ``;
}
