//PUXANDO O ELEMENTOS DO HTML
const turnOnOff = document.getElementById( 'turnOnOff' );
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

function lampOnOff () {
  if( turnOnOff.textContent == 'Ligar' ){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else {
    lampOff();
    turnOnOff.textContent = 'Ligar';
  }
}
turnOnOff.addEventListener( 'click', lampOnOff );

lamp.addEventListener( 'mouseover', lampOn );
lamp.addEventListener( 'mouseleave', lampOff );
lamp.addEventListener( 'dblclick', lampBroken);
