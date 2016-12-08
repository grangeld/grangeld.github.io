

////////////////////////////////////////////////
/////Код чтоб отобразить менющку в начале сайта
var div8 = document.createElement('div');
//200*230
div8.style.width = '93%';
div8.style.height = '50px';
div8.classList.add('line_glavnaja');
div8.innerHTML = '<a onclick="start()" href="#" class="button15">ГЛАВНАЯ</a>';
// div8.style.background = 'red';
info_odejda.insertBefore(div8,info_odejda.children[0]);
///////////////////////////////////////////////////////////


function start(){
 info_odejda.innerHTML = '';


var div8 = document.createElement('div');
//200*230
div8.style.width = '93%';
div8.style.height = '50px';
div8.classList.add('line_glavnaja');
div8.innerHTML = '<a onclick="start()" href="#" class="button15">ГЛАВНАЯ</a>';
// div8.style.background = 'red';
info_odejda.appendChild(div8);

info_odejda.innerHTML +='<div class="fon_index">        <p class="fon_p">ДОПОЛНИТЕЛЬНАЯ СКИДКА УЖЕ С ПЕРВОЙ ПОКУПКИ</p>        <img style="float: left; margin-right: 20px;" src="img/vp_18_0.jpg">        <p class="fon_p1">Такого еще не было! 12.11.16 началась супер распродажа всего товара на который уже скидки от 50% до 90%. Мы дарим вам еще дополнительные моментальные скидки 5%-15% Уважаемые Покупатели с 12.11.16 по 08.01.2017 (включительно)Сделав покупку..</p>      </div>      <div class="fon_index cursor_pointer" onclick="bluzka()">        <p class="fon_p">ЛУЧШИЕ СКИДКИ НА БЛУЗЫ</p>        <p class="fon_p">BLACK FRIDAY</p>        <img style="float: left; margin-right: 20px;" src="img/vp_20.jpg">        <p class="fon_p1"> Только 7 дней с 21.11.16 по 28.11.16 (включительно) на все товары где скидки уже -70% -90%  дополнительная скидка к Вашей карте -20%!*cкидки по этой акции не суммируются к скидкам по другим акциям Ждем вас ежедневно с 10 до 20 часов...</p>      </div>    <div class="fon_index">        <p class="fon_p">АКЦИЯ: КАРТА КЛУБА ВДАЛА ПОКУПКА В ПОДАРОК</p>        <img style="float: left; margin-right: 20px;" src="img/vp_17_1.jpg">        <p class="fon_p1">Уважаемые Покупатели с 12.11.16 по 08.01.2017 (включительно) сделав покупку на 500грн или предъявив чеки на 500грн за более ранний период, Вы получаете дисконтную карточку клуба "ВДАЛА ПОКУПКА" (стоимостью 100грн) в подарок, которая будет...</p>     </div>'

}



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

// window.onscroll = function() {
 
//  alert('s') 
// }
///////////////////////////////Событие прокрутки мышки
var elem = document.getElementById('bod');

    
if (elem.addEventListener) {

      if ('onwheel' in document) {

        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    }



function onWheel(){
	clearInterval(timerId);
}

}, time);



}
