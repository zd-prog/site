window.onload = function () 
{
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}
var flag = false;
function AddBlock()
{
	

	if (!flag)
	{
		var str1 = document.createElement('section');
	str1.className='request';
	str1.id="request";

	var footer = document.getElementById('footer');
	var node = footer.parentNode;
	node.insertBefore(str1, footer);

	var str2 = document.createElement('div');
	str2.className='container';
	str1.appendChild(str2);

	var str3 = document.createElement('h3');
	str3.className='request_text';
	str3.innerText="Оставьте заявку и мы свяжемся с вами";
	str2.appendChild(str3);

	var str4 = document.createElement('div');
	str4.className='request__inner';
	str2.appendChild(str4);

	var str5 = document.createElement('form');
	str5.className='request_form';
	str5.action="https://formspree.io/f/xvovbayn";
	str5.method='post';
	str4.appendChild(str5);

	var str6 = document.createElement('div');
	str6.className='request_inputs';
	str5.appendChild(str6);

	var str7 = document.createElement('p');
	str7.className='text_form';
	str7.innerText="Ваш e-mail";
	str6.appendChild(str7);

	var str8 = document.createElement('input');
	str8.type='e-mail';
	str8.className='e-mail';
	str8.name='e-mail';
	str6.appendChild(str8);

	var str9 = document.createElement('p');
	str9.className='text_form';
	str9.innerText='Ваше имя';
	str6.appendChild(str9);

	var str10 = document.createElement('input');
	str10.type='name';
	str10.className='name';
	str10.name='name';
	str6.appendChild(str10);

	var str11 = document.createElement('p');
	str11.className='text_form';
	str11.innerText='Ваш телефон';
	str6.appendChild(str11);

	var str12 = document.createElement('input');
	str12.type='tel';
	str12.className='telephone';
	str12.name='phone';
	str6.appendChild(str12);

	var str13 = document.createElement('p');
	str13.className='text_form';
	str13.innerText='Сообщение';
	str6.appendChild(str13);

	var str14 = document.createElement('textarea');
	str14.className='message';
	str14.name='message';
	str6.appendChild(str14);

	var str15 = document.createElement('div');
	str15.className="submit_button";
	str5.appendChild(str15);

	var str16 = document.createElement('input');
	str16.type='submit';
	str16.className='button';
	str16.value='Отправить';
	str15.appendChild(str16);

	var str17 = document.createElement('img');
	str17.className='request_image';
	str17.src='images/request.jpg';
	str4.appendChild(str17);
	}
	flag = true;
}

