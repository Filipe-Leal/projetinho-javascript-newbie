//PUXANDO O ELEMENTOS DO HTML
const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken () {
  return lamp.src.indexOf ( 'quebrada' ) > -1 // QUANDO ENCONTRA SAI 0, QUANDO NÃO SAI -1 | 0 > -1 
}

function lampOn (){
  if( !isLampBroken() ){
    lamp.src = './assets/img/ligada.jpg';
  }
  
}

function lampOff (){
  if( !isLampBroken() ){
    lamp.src = './assets/img/desligada.jpg';
  }
  
}

function lampBroken (){
  lamp.src = './assets/img/quebrada.jpg';
}

turnOn.addEventListener( 'click', lampOn );
turnOff.addEventListener( 'click', lampOff );
lamp.addEventListener( 'mouseover', lampOn );
lamp.addEventListener( 'mouseleave', lampOff );
lamp.addEventListener( 'dblclick', lampBroken);
