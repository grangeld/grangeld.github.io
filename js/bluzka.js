// var be[1] = "ds";
// alert(be[1]);


//bluzka();	//Это проверка функции

function bluzka(){



// var be = [];
// be['1.jpg'] = "ds";
// alert(be['<1 class="jpg"></1>']);
info_odejda.innerHTML = '';


var div8 = document.createElement('div');
//200*230
div8.style.width = '93%';
div8.style.height = '50px';
div8.classList.add('line_glavnaja');
div8.innerHTML = '<a onclick="start()" href="#" class="button15">ГЛАВНАЯ</a>';
// div8.style.background = 'red';
info_odejda.appendChild(div8);

// alert('g')
var bluzka_info = 
[
['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14000', 'Старая цена: <strike>329.00 грн.</strike> <br>Скидка: 55% <br><span class="price_color">Наша цена: 149.00 грн.</span>'],
['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14009', 'Старая цена: <strike>329.00 грн.</strike> <br>Скидка: 55% <br><span class="price_color">Наша цена: 149.00 грн.</span>'],

['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14010', 'Старая цена: <strike>329.00 грн.</strike> <br>Скидка: 50% <br><span class="price_color">Наша цена: 149.00 грн.</span>'],
['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14020', 'Старая цена: <strike>299.00 грн.</strike> <br>Скидка: 50% <br><span class="price_color">Наша цена: 149.00 грн.</span>'],

['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14003', 'Старая цена: <strike>299.00 грн.</strike> <br>Скидка: 50% <br><span class="price_color">Наша цена: 149.00 грн.</span>'],
['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14006', 'Старая цена: <strike>299.00 грн.</strike> <br>Скидка: 50% <br><span class="price_color">Наша цена: 149.00 грн.</span>'],

['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 13000', 'Старая цена: <strike>299.00 грн.</strike> <br>Скидка: 52% <br><span class="price_color">Наша цена: 159.00 грн.</span>'],
['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14600', 'Старая цена: <strike>969.00 грн.</strike> <br>Скидка: 76% <br><span class="price_color">Наша цена: 229.00 грн.</span>'],

['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 11000', 'Старая цена: <strike>949.00 грн.</strike> <br>Скидка: 59% <br><span class="price_color">Наша цена: 389.00 грн.</span>'],
['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14300', 'Старая цена: <strike>949.00 грн.</strike> <br>Скидка: 59% <br><span class="price_color">Наша цена: 389.00 грн.</span>'],

['<b>Блузы</b><br>Buika <br>арт: 070914-16 <br>RADUGA код: 14050', 'Старая цена: <strike>949.00 грн.</strike> <br>Скидка: 59% <br><span class="price_color">Наша цена: 389.00 грн.</span>']



]

// alert(bluzka_info[0][1])

// alert('hi')

var div = document.createElement('div');
//200*230
div.style.width = '200px';
div.style.height = '250px';
// div.style.paddingLeft = '10px';
// div.style.paddingTop = '4px';
// div.style.background = 'red';
div.style.float ='left';
div.style.border = '4px double black';
div.style.marginRight = '20px';
div.style.marginBottom = '20px';
// div.innerHTML = bluzka_info[0][0];


var div1 = document.createElement('div');
div1.style.width = '93%';
div1.style.height = '24%';
// div1.style.background = 'red';
div1.style.padding = '4px';
div1.style.paddingLeft = '10px';
div1.innerHTML = bluzka_info[0][0];
div1.style.lineHeight="1.2";

var div2 = document.createElement('div');
div2.style.width = '100%';
div2.style.height = '50%';
// div2.style.background = 'green';
// div2.style.padding = '4px';
// div2.style.paddingLeft = '10px';
div2.innerHTML = '<center><img onclick="grandImg(this)" class="cursor_pointer" alt="Картинка" src="img/bluzka/1.jpg"></center>';


var div3 = document.createElement('div');
div3.style.width = '95%';
div3.style.height = '18%';
// div3.style.background = 'yellow';
div3.style.paddingTop = '10px';
div3.style.paddingLeft = '10px';
div3.innerHTML = bluzka_info[0][1];
div3.style.lineHeight="1.2";
div3.fontSize = '12px;';

//////Вывод дива
div.appendChild(div1);
div.appendChild(div2);
div.appendChild(div3);
info_odejda.appendChild(div);



// создать копию узла
	for(var i = 2; i < 11; i++)
	{
		var divK = div.cloneNode(true);
		divK.querySelectorAll('div')[0].innerHTML = bluzka_info[i][0];
		divK.querySelectorAll('div')[1].innerHTML = '<center><img onclick="grandImg(this)" class="cursor_pointer" alt="Картинка" src="img/bluzka/'+i+'.jpg"></center>';
		divK.querySelectorAll('div')[2].innerHTML = bluzka_info[i][1];
		
		  // var divK = div.cloneNode(true);
	  // divK.querySelector('strong').innerHTML = 'Супер!';
		 div.parentNode.insertBefore(divK, div.nextSibling);
	}

	

}

