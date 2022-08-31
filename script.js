function jubilacion(promUltimoSueldo,porcentaje) {
    return promUltimoSueldo * porcentaje / 100;
}

let promUltimoSueldo, porcentaje;

do {
    promedio= parseFloat(prompt("Ingrese el promedio de los ultimos sueldos"))
    porcen = parseFloat(prompt("Ingrese el porcentaje"))

} 

while(isNaN(promedio) || isNaN(porcen))

let resultado = jubilacion(promedio, porcen)
alert("El monto a cobrar de jubilación es " + resultado)

