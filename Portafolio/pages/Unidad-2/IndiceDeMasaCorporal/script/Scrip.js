//Script QwQ

function imc(){
	let resultado = 0;
	let cmtom = 0;
	let clasif= "Nada";

	let kg = document.querySelector("#peso");
	kg.placeholder="Ingresa tu peso...";

	let cm = document.querySelector("#altura");
	cm.placeholder="Ingresa tu altura...";

	cmtom = cm.value/100;

	resultado = kg.value / (cmtom * cmtom);

	let hres = document.querySelector("#imc");
	hres.textContent=resultado;

	clasif = clasificacion(resultado);
	
	let hcalif = document.querySelector("#clasificacion");
	hcalif.textContent=clasif;
}


function clasificacion(imc){

	let img = document.querySelector("#img");

	if (imc < 18.50) {
		img.src = "img/BajoPeso.png";
		return "Bajo Peso";
	}else{
		if (imc >= 18.50 && imc <=24.99) {
			img.src = "img/Normal.png";
			return "Normal";
		}else{
			if (imc >= 25 && imc <= 29.99) {
				img.src = "img/Sobrepeso.png";
				return "Sobrepeso";
			}else{
				img.src = "img/Obeso.png";
				return "Obeso";
			}
		}
	}

}

function clean(){
	let kg = document.querySelector("#peso");
	let cm = document.querySelector("#altura");
	let hres = document.querySelector("#imc");
	let hcalif = document.querySelector("#clasificacion");


	kg.value = " ";
	cm.value = " ";

	hres.textContent=" ";
	hcalif.textContent= " ";

}



