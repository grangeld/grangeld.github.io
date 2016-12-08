function grandImg(elem){
	// body... 

///Достаем нужный адрес
 var img = (elem.src).substring((elem.src).indexOf("img/"));
 var last = img.lastIndexOf('/');

var name_img = img.substring(last+1);	///Получим название картинки

var adress_img = img.substring(0,last+1);
////Здесь будет хранится большая картинка
var itogo_img = adress_img + 'b/' + name_img;

   //alert(itogo_img)

/*
  var div = document.createElement('div');
  div.id = 'div_okno';

  var div1 = document.createElement('div');
  div1.id = 'div_okno_img';
  div1.style.opacity = '1'
  div1.style.background = "url("+itogo_img+") no-repeat  center center fixed";
  // div1.style.background = 'green'
  // bod.appendChild(div1);
div.style.opacity = '0.4'
div.appendChild(div1);
  document.body.appendChild(div);
  
*/

var d1=document.createElement('div');
d1.id = "div_okno";
document.body.appendChild(d1);

var d=document.createElement('div');
d.style.width='500px';
d.style.height='667px';
d.style.background ='gray';
d.style.position = 'fixed';
d.style.top = '10%';
d.style.left = '40%';
d.style.background = 'url('+itogo_img+') no-repeat';
d.style.backgroundSize = 'contain';
d.id = "div_okno_img";
// d.style.border ='0';
//споказываем див
document.body.appendChild(d);

var d2=document.createElement('input');
d2.style.width='20px';
d2.style.height='20px';
d2.style.background ='grey';
d2.style.position = 'relative';
d2.style.top = '1%';
d2.style.left = '94%';
d2.type = "button";
d2.value = "X";
// d2.style.fontWeight = "900";
d2.id = "imgg20";

d2.onclick = function()
{
///Удаляем по айдишникам
	document.body.removeChild(document.getElementById("div_okno_img"));
	document.body.removeChild(document.getElementById("div_okno"));
	document.body.removeChild(document.getElementById("imgg20"));
}
d.appendChild(d2);

}