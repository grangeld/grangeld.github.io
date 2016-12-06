

///При нажатии на котейку, страница прокручивается вверх.
kiska.onclick = function(){
// window.scrollTo(0, 0)	///Переместить на координаты
///////////////////////////
var pix = 1; 	//Число пикселей для прокрутки
var time = 2; //Задержка для прокрутки
///////////////////////////
var pick = 0;
var stop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);  ;
var timerId = setInterval(function() {

var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);  
if(stop != top) clearInterval(timerId);
pick++;
if(pick%20 == 0)pix++;	//Ускорение прокрутки
 if(top > 0) {
    window.scrollBy(0,-pix);
    stop = top-pix;
  } else clearInterval(timerId);

}, time);



}