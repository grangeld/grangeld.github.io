var numERIK=0;


var timerId1 = setInterval(function() {

  		// var num=0;
  		var temp_num = 0;
  		if(numERIK %2 == 0) temp_num = 0;
  		else {
  			temp_num = 1;
  		}
// var id = 2;
var id = document.getElementById('dom1');
if(!id)
	{
		///Если элемента нет на страницы
		// alert('меня нет на странице');
var div8 = document.createElement('div');
// var h = $('#otstyp_1').css('height');

div8.id = 'dom1';
// div8.style.marginTop = h;
div8.style.marginLeft = '20px';
div8.style.width = '93%';
div8.style.height = '273px';
div8.style.background = "url(img/baner/1.jpg)";
// div8.classList.add('line_glavnaja');
// div8.innerHTML = '<div id="dom2"></div>';
// div8.style.background = 'red';
info_odejda.parentNode.appendChild(div8);

var div9 = document.createElement('div');
div9.id = 'dom2';
// div9.style.position = 'relative';
div9.style.width = '100%';
div9.style.height = '273px';
div9.style.background = "url(img/baner/2.jpg)";
div9.style.opacity = '0';
div8.appendChild(div9);
	} 
else 
	{
		// $('#dom1').remove();
		// $('#dom2').remove();

// alert('da')
		var timer1 = setInterval(function() {
		  // alert( "тик" );
		  if(numERIK % 2 == 0)
		  {
		// dom1.style.opacity -= 0.2;
		temp_num += 0.1;
		dom2.style.opacity =temp_num;
		  }
		  else
		  {
		  	// dom1.style.opacity += 0.2;
		temp_num -= 0.1;
		dom2.style.opacity =temp_num;
		// alert('fd')
		  }

		}, 100);

// через 5 сек остановить повторы
		setTimeout(function() {
		  clearInterval(timer1);
		  numERIK++;
		  if(numERIK == 1000) numERIK = 0;
		}, 1100);
		// alert(dom1.style.opacity);



	}




}, 8000);

 // alert('id')
