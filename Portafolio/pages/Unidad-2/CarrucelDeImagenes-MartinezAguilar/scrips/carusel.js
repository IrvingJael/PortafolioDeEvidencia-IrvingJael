


let intimg1 = setInterval(img1,8000); // la repite cada 5seg
let intimg2 = setInterval(img2,6000);
let intimg3 = setInterval(img3,10000);

function img1() {
	let img = document.getElementById('imagen');
	img.setAttribute("src","img/1.jpg");
	console.log('Img 1 colocada');
}

function img2() {
	let img = document.getElementById('imagen');
	img.setAttribute("src","img/2.jpg");
	console.log('Img 2 colocada');
}

function img3() {
	let img = document.getElementById('imagen');
	img.setAttribute("src","img/3.jpg");
	console.log('Img 3 colocada');
}

function detener(){

	clearInterval(intimg1);// limpiar el intervalo - detenerlo
	clearInterval(intimg2);
	clearInterval(intimg3);
}

function empezar(){
	intimg1 = setInterval(img1,8000); // la repite cada 5seg
	intimg2 = setInterval(img2,6000);
	intimg3 = setInterval(img3,10000);
}

