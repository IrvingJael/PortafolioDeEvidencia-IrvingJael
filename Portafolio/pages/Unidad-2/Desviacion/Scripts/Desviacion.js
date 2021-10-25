/*

	Escribir un JS que calcula la desviacion estandar de
	un conjunto de valores.


*/


	let Valores = [9,8,5,1,3,1,10,3,7,2];
	let Varian = [0];
	let VarianCuad = [0];

	let Desv;
	let Var;
	let Media = 0.0;
	let total = 0;
	let totalVar = 0;

	for (let i = 0; i<Valores.length;i++){
		total = total + Valores[i];
	}

	Media = total / Valores.length;

	for (let i = 0; i<Valores.length;i++){
		Varian[i] = Valores[i] - Media;
	}

	for (let i = 0; i<Valores.length;i++){
		VarianCuad[i] = Varian[i] * Varian[i];
	}

	for (let i = 0; i<VarianCuad.length;i++){
		totalVar = totalVar + VarianCuad[i];
	}

	Var = totalVar / VarianCuad.length;

	Desv = Math.sqrt(Var);

	console.log('Arreglo:'+Valores);

	console.log('Media: '+Media);

	console.log('Varianza: '+Var);

	console.log('Desviacion: '+Desv);

