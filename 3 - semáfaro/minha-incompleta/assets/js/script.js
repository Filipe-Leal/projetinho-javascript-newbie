const red = document.getElementById( 'red' );
const yellow = document.getElementById( 'yellow' );
const green = document.getElementById( 'green' );
const automatic = document.getElementById( 'automatic' );
const imgStreetLight = document.getElementById( 'streetLight' );

function onRed(){
  imgStreetLight.src = './assets/img/vermelho.png';
}

function onYellow(){
  imgStreetLight.src = './assets/img/amarelo.png';
}

function onGreen(){
  imgStreetLight.src = './assets/img/verde.png';
}

function onAutomatic(){
  onRed();
  onYellow();
  onGreen();
}

red.addEventListener( 'click', onRed );
yellow.addEventListener( 'click', onYellow );
green.addEventListener( 'click', onGreen );
automatic.addEventListener( 'click', onAutomatic);
