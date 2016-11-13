$(document).ready(function() {
	$('select').material_select();
	 console.log($("#gender").val());
	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	});
});
var database = firebase.database();
var tours = database.ref('tours/');
function registroTours() {
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var tour = $("#tour").val();
	var country = $("#country").val();
	var city = $("#city").val();
	var price = $("#price").val();
	var date = $("#date").val();
	var creditCard = $('#creditCard').val();
	var secutiryCode = $('#secutiryCode').val();
	var expiration = $('#expiration').val();
	var code = $('#code').val();
	if (code == 'tour10') {
		descuento =price - (Number(price))*.1;
	}else if(code == 'tour20'){
		descuento = price - (Number(price))*.2;
	}
	tours.push({
		firstName:firstName,
		lastName:lastName,
		email:email,
		phone:phone,
		tour:tour,
		country:country,
		city:city,
		date:date,
		price:price,
		creditCard:creditCard,
		secutiryCode:secutiryCode,
		expiration:expiration,
		code:code,
		descuento:descuento
	});
}

var vuelos = database.ref('vuelos/');
function registroVuelos() {
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var airline = $("#airline").val();
	var date = $("#date").val();
	var time = $("#time").val();
	var origin = $("#origin").val();
	var destination = $("#destination").val();
	var price = $("#price").val();
	var creditCard = $('#creditCard').val();
	var secutiryCode = $('#secutiryCode').val();
	var expiration = $('#expiration').val();
	var code = $('#code').val();
	if (code == 'vuelo10') {
		descuento =price - (Number(price))*.1;
	}else if(code == 'vuelo20'){
		descuento =price - (Number(price))*.2;
	}
	vuelos.push({
		firstName:firstName,
		lastName:lastName,
		email:email,
		phone:phone,
		airline:airline,
		date:date,
		time:time,
		origin:origin,
		destination:destination,
		price:price,
		creditCard:creditCard,
		secutiryCode:secutiryCode,
		expiration:expiration,
		code:code,
		descuento:descuento
	});

}

var hoteles = database.ref('hoteles/');
function registroHoteles() {
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var hotel = $("#hotel").val();
	var stars = $("#stars").val();
	var bed = $("#bed").val();
	var price = $("#price").val();
	var country = $("#country").val();
	var city = $("#city").val();
	var stay = $("#stay").val();
	var date = $("#date").val();
	var creditCard = $('#creditCard').val();
	var secutiryCode = $('#secutiryCode').val();
	var expiration = $('#expiration').val();
	var code = $('#code').val();
	var descuento;
	if (code == 'hotel10') {
		descuento = price - (Number(price))*.1;
	}else if(code == 'hotel20'){
		descuento = price - (Number(price))*.1;
	}
	hoteles.push({
		firstName:firstName,
		lastName:lastName,
		email:email,
		phone:phone,
		hotel:hotel,
		stars:stars,
		bed:bed,
		price:price,
		country:country,
		city:city,
		stay:stay,
		date:date,
		creditCard:creditCard,
		secutiryCode:secutiryCode,
		expiration:expiration,
		code:code,
		descuento:descuento
	});
}

var paquetes = database.ref('paquetes/');
function registroPaquetes() {
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var airline = $("#airline").val();
	var date = $("#date").val();
	var time = $("#time").val();
	var origin = $("#origin").val();
	var destination = $("#destination").val();
	var hotel = $("#hotel").val();
	var stars = $("#stars").val();
	var bed = $("#bed").val();
	var price = $("#price").val();
	var stay = $("#stay").val();
	var tour = $("#tour").val();
	var creditCard = $('#creditCard').val();
	var secutiryCode = $('#secutiryCode').val();
	var expiration = $('#expiration').val();
	var code = $('#code').val();
	var descuento;
	if (code == 'paquete10') {
		descuento = price - (Number(price))*.1;
	}else if(code == 'paquete20'){
		descuento = price - (Number(price))*.1;
	}
	paquetes.push({
		firstName:firstName,
		lastName:lastName,
		email:email,
		airline:airline,
		date:date,
		time:time,
		origin:origin,
		destination:destination,
		hotel:hotel,
		stars:stars,
		bed:bed,
		price:price,
		stay:stay,
		tour: tour,
		creditCard:creditCard,
		secutiryCode:secutiryCode,
		expiration:expiration,
		code:code,
		descuento:descuento
	});
}



tours.on('value', function(snapshot) {
	tour = snapshot.val();
	var data = '';
	$.each(tour, function (key, object) {
		data += '<tr><td>'+object['firstName']+'</td><td>'+object['lastName']+'</td><td>'+object['email']+'</td><td>'+object['phone']+'</td><td>'+object['tour']+'</td><td>'+object['country']+'</td><td>'+object['city']+'</td><td>'+object['date']+'</td><td>'+object['price']+'</td><td>'+object['creditCard']+'</td><td>'+object['secutiryCode']+'</td><td>'+object['expiration']+'</td><td>De $'+object['price']+'.00 a $'+object['descuento']+'.00</td></tr>';
	})
	$('#toursData').html(data);
});


vuelos.on('value', function(snapshot) {
	vuelo = snapshot.val();
	var data = '';
	$.each(vuelo, function (key, object) {
		data +='<tr><td>'+object['firstName']+'</td><td>'+object['lastName']+'</td><td>'+object['email']+'</td><td>'+object['phone']+'</td><td>'+object['airline']+'</td><td>'+object['date']+'</td><td>'+object['time']+'</td><td>'+object['origin']+'</td><td>'+object['destination']+'</td><td>'+object['price']+'</td><td>'+object['creditCard']+'</td><td>'+object['secutiryCode']+'</td><td>'+object['expiration']+'<td>De $'+object['price']+'.00 a $'+object['descuento']+'.00</td>/td></tr>';
	})
	$('#vuelosData').html(data);
});


hoteles.on('value', function(snapshot) {
	hotel = snapshot.val();
	var data = '';
	$.each(hotel, function (key, object) {
		data += '<tr><td>'+object['firstName']+'</td><td>'+object['lastName']+'</td><td>'+object['email']+'</td><td>'+object['phone']+'</td><td>'+object['hotel']+'</td><td>'+object['stars']+'</td><td>'+object['bed']+'</td><td>'+object['country']+'</td><td>'+object['city']+'</td><td>'+object['stay']+'</td><td>'+object['date']+'</td><td>'+object['price']+'</td><td>'+object['creditCard']+'</td><td>'+object['secutiryCode']+'</td><td>'+object['expiration']+'</td><td>De $'+object['price']+'.00 a $'+object['descuento']+'.00</td></tr>';
	})
	$('#hotelesData').html(data);
});


paquetes.on('value', function(snapshot) {
	paquete = snapshot.val();
	var data = '';
	$.each(paquete, function (key, object) {
		data += '<tr><td>'+object['firstName']+'</td><td>'+object['lastName']+'</td><td>'+object['email']+'</td><td>'+object['airline']+'</td><td>'+object['date']+'</td><td>'+object['time']+'</td><td>'+object['origin']+'</td><td>'+object['destination']+'</td><td>'+object['hotel']+'</td><td>'+object['stars']+'</td><td>'+object['bed']+'</td><td>'+object['price']+'</td><td>'+object['tour']+'</td><td>'+object['creditCard']+'</td><td>'+object['secutiryCode']+'</td><td>'+object['expiration']+'</td><td>De $'+object['price']+'.00 a $'+object['descuento']+'.00</td></tr>';
	})
	$('#paquetesData').html(data);
});

