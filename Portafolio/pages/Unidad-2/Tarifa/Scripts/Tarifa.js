/*
		La CFE genera la factura con base en 
        la lectura de Kwh consumidos en un bimestre

        los primeros 300kw son a la tarifa1 (basica)
        los siguientes 300 kw son a la tarifa 2(intermiedia)
        de 601 kw hacia arriba son a la tarifa de alto consumo

        dado un consumo en Kw y los costos de cada tarifa 
        escribir un pequeño programa  en javascipt que 
        obtenga el total a pagar y presente el detalle 
        a pagar de cada tarifa

        1000kw   t1 $1, t2 
 		300 * $1 300 * 1
        300 * $3 300 * 3
        400 * $5 500 * 5
       -----------------
       $3200     $3700
*/



    let total = 0;

    let consumo = 0;
    let t1 = 0;
    let t2 = 0;
    let t3 = 0;

    consumo = parseInt(prompt('Consumo en Kw: '));

    if (consumo > 300) {
        consumo = consumo - 300;
        t1 = 300;

        if (consumo >300) {
            consumo = consumo - 300;
            t2 = 300 * 3;

            if (consumo >=1) {
                t3 = consumo * 5;
            }
        }else{
            t2 = consumo * 3;
        }
    }else{
        t1 = consumo;
    }

    total = t1 + t2 + t3;
	
    alert("Total: $"+total);
