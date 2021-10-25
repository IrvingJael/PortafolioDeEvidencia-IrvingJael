
//Funciones


function sumar(){
	//Texto para indicar los numeros.
	let txtnum1 = document.createElement("h2");
	txtnum1.textContent ="Numero 1:";
	txtnum1.setAttribute("class","position");

	let txtnum2 = document.createElement("h2");
	txtnum2.textContent ="Numero 2:";
	txtnum2.setAttribute("class","position");

	//Cajas de texto para ingresar los numeros
	let slct1 = document.createElement("input");
	slct1.setAttribute("type","number");
	slct1.id="select1";
	slct1.setAttribute("class","position");

	let slct2 = document.createElement("input");
	slct2.setAttribute("type","number");
	slct2.id="select2";
	slct2.setAttribute("class","position");

	//Boton para calcular el resultado.
	let btncalcular = document.createElement("button");
	btncalcular.innerText="Calcular";
	btncalcular.setAttribute("class","position");
	btncalcular.onclick =function(){
		alert('El resutado es: '+suma(parseInt(slct1.value),parseInt(slct2.value))); //Especificar con la suma
	}
	
	//Edicion del div "opcion" para agregar los elementos creados anteriormente
	let div = document.querySelector(".opcion");
	div.innerHTML="<h1>Sumar</h1>";
	div.appendChild(txtnum1);
	div.appendChild(slct1);
	div.appendChild(txtnum2);
	div.appendChild(slct2);
	div.appendChild(btncalcular);
}

function restar(){
	//Texto para indicar los numeros.
	let txtnum1 = document.createElement("h2");
	txtnum1.textContent ="Numero 1:";
	txtnum1.setAttribute("class","position");

	let txtnum2 = document.createElement("h2");
	txtnum2.textContent ="Numero 2:";
	txtnum2.setAttribute("class","position");

	//Cajas de texto para ingresar los numeros.
	let slct1 = document.createElement("input");
	slct1.setAttribute("type","number");
	slct1.id="select1";
	slct1.setAttribute("class","position");

	let slct2 = document.createElement("input");
	slct2.setAttribute("type","number");
	slct2.id="select2";
	slct2.setAttribute("class","position");

	//Boton para calcular el resultado.
	let btncalcular = document.createElement("button");
	btncalcular.innerText="Calcular";
	btncalcular.setAttribute("class","position");
	btncalcular.onclick =function(){
		alert('El resutado es: '+resta(parseInt(slct1.value),parseInt(slct2.value))); //Especificar con la suma
	}
	
	//Edicion del div "opcion" para agregar los elementos creados anteriormente
	let div = document.querySelector(".opcion");
	div.innerHTML="<h1>Restar</h1>";
	div.appendChild(txtnum1);
	div.appendChild(slct1);
	div.appendChild(txtnum2);
	div.appendChild(slct2);
	div.appendChild(btncalcular);

}

function multiplicar(){
	//Texto para indicar los numeros.
	let txtnum1 = document.createElement("h2");
	txtnum1.textContent ="Numero 1:";
	txtnum1.setAttribute("class","position");

	let txtnum2 = document.createElement("h2");
	txtnum2.textContent ="Numero 2:";
	txtnum2.setAttribute("class","position");

	//Cajas de texto para ingresar los numeros.
	let slct1 = document.createElement("input");
	slct1.setAttribute("type","number");
	slct1.id="select1";
	slct1.setAttribute("class","position");

	let slct2 = document.createElement("input");
	slct2.setAttribute("type","number");
	slct2.id="select2";
	slct2.setAttribute("class","position");

	//Boton para calcular el resultado.
	let btncalcular = document.createElement("button");
	btncalcular.innerText="Calcular";
	btncalcular.setAttribute("class","position");
	btncalcular.onclick =function(){
		(function(n1,n2) {let res=n1*n2; alert('El resutado es: '+res); })(parseInt(slct1.value),parseInt(slct2.value));
	}
	
	
	//Edicion del div "opcion" para agregar los elementos creados anteriormente
	let div = document.querySelector(".opcion");
	div.innerHTML="<h1>Multiplicar</h1>";
	div.appendChild(txtnum1);
	div.appendChild(slct1);
	div.appendChild(txtnum2);
	div.appendChild(slct2);
	div.appendChild(btncalcular);

}

function dividir(){
	//Texto para indicar los numeros.
	let txtnum1 = document.createElement("h2");
	txtnum1.textContent ="Numero 1:";
	txtnum1.setAttribute("class","position");

	let txtnum2 = document.createElement("h2");
	txtnum2.textContent ="Numero 2:";
	txtnum2.setAttribute("class","position");

	//Cajas de texto para ingresar los numeros.
	let slct1 = document.createElement("input");
	slct1.setAttribute("type","number");
	slct1.id="select1";
	slct1.setAttribute("class","position");

	let slct2 = document.createElement("input");
	slct2.setAttribute("type","number");
	slct2.id="select2";
	slct2.setAttribute("class","position");

	//Boton para calcular el resultado.
	let btncalcular = document.createElement("button");
	btncalcular.innerText="Calcular";
	btncalcular.setAttribute("class","position");
	btncalcular.onclick =function(){
		let div=function dividir(n1,n2){
					let resultado = 0;
					if (n2 != 0) {
						resultado = n1 / n2;
					}
					return resultado;
				}
		if (parseInt(slct2.value) != 0) {
			alert('El resutado es: '+div(parseInt(slct1.value),parseInt(slct2.value)));
		}else{
			alert('No se puede dividir entre cero')
		}
	}
	
	//Edicion del div "opcion" para agregar los elementos creados anteriormente
	let div = document.querySelector(".opcion");
	div.innerHTML="<h1>Dividir</h1>";
	div.appendChild(txtnum1);
	div.appendChild(slct1);
	div.appendChild(txtnum2);
	div.appendChild(slct2);
	div.appendChild(btncalcular);

}

let prom = [0];
let sum = 0;
let n = 0;

function Prom(){
	let numval = prompt("Ingresa el numero de elementos del arreglo");

	let div = document.querySelector(".opcion");
	div.innerHTML="<h1>Promedio</h1>";

	for (let i = 1; i <= numval; i++) {
		let txtnum = document.createElement("h2");
		txtnum.textContent ="Numero "+i+":";
		txtnum.setAttribute("class","position");

		let slct = document.createElement("input");
		slct.setAttribute("type","number");
		slct.id="select"+i;
		slct.setAttribute("class","position");


		div.innerHTML;
		div.appendChild(txtnum);
		div.appendChild(slct);

	}


	//Boton para calcular el resultado
	let btncalcular = document.createElement("button");
	btncalcular.innerText="Calcular";
	btncalcular.setAttribute("class","position");
	btncalcular.onclick =function(){
		prom = [0];
		sum = 0;
		n = 0;
		let promed = 0;
		
		for(let i = 1; i <=numval;i++){
			prom[n] = document.getElementById("select"+i).value;
			n = n + 1;
		}
		for (let i = 0 ; i < prom.length ; i++) {
			sum = sum + parseInt(prom[i]);
		}
		promed = sum / prom.length;
		alert('El promedio es: '+promed);
	}

	div.appendChild(btncalcular);

}

let Valores = [0];
let Varian = [0];
let VarianCuad = [0];

let Desv;
let Var;
let Media = 0.0;
let total = 0;
let totalVar = 0;

n = 0;

function Desviacion(){

	let numval = prompt("Ingresa el numero de elementos del arreglo");

	let div = document.querySelector(".opcion");
	div.innerHTML="<h1>Desviacion</h1>";

	for (let i = 1; i <= numval; i++) {
		let txtnum = document.createElement("h2");
		txtnum.textContent ="Numero "+i+":";
		txtnum.setAttribute("class","position");

		let slct = document.createElement("input");
		slct.setAttribute("type","number");
		slct.id="select"+i;
		slct.setAttribute("class","position");


		div.innerHTML;
		div.appendChild(txtnum);
		div.appendChild(slct);

	}


	//Boton para calcular el resultado
	let btncalcular = document.createElement("button");
	btncalcular.innerText="Calcular";
	btncalcular.setAttribute("class","position");
	btncalcular.onclick =function(){
		Valores = [0];
		Varian = [0];
		VarianCuad = [0];

		Desv;
		Var;
		Media = 0.0;
		total = 0;
		totalVar = 0;

		n = 0;

		for(let i = 1; i <= numval;i++){
			Valores[n] = document.getElementById("select"+i).value;
			n = n + 1;
		}

		for (let i = 0; i<Valores.length;i++){
			total = total + parseInt(Valores[i]);
		}

		Media = total / Valores.length;

		for (let i = 0; i<Valores.length;i++){
			Varian[i] = parseInt(Valores[i]) - Media;
		}

		for (let i = 0; i<Valores.length;i++){
			VarianCuad[i] = Varian[i] * Varian[i];
		}

		for (let i = 0; i<VarianCuad.length;i++){
			totalVar = totalVar + VarianCuad[i];
		}

		Var = totalVar / VarianCuad.length;

		Desv = Math.sqrt(Var);

		alert('La desviasion estandar es: '+Desv);

	}

	div.appendChild(btncalcular);

}

//Funciones de algunas operaciones
function suma(n1,n2){
	let resultado=0;

	if(!isNaN(n1) && !isNaN(n2)){
		resultado = n1 + n2;
	}
	return resultado;
}

function resta(n1,n2){
	let resultado=0;
	
	if(!isNaN(n1) && !isNaN(n2)){
		resultado = n1 - n2;
	}
	return resultado;
}

