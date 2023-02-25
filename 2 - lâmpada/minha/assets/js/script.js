const lampada = document.getElementById('lampada');
const btnLigar = document.getElementById('btn-ligar');
const btnDesligar = document.getElementById('btn-desligar');

//LIGAR
btnLigar.addEventListener('click', ligar);
lampada.addEventListener('mouseenter', ligar);

function ligar(){
  lampada.src = 'assets/img/ligada.jpg';
 // alert('ENTROU!');
}

//DESLIGAR
btnDesligar.addEventListener('click', saiu);
lampada.addEventListener('mouseout', saiu);

function saiu(){
  lampada.src = 'assets/img/desligada.jpg';
  //alert('SAIU!');
}

