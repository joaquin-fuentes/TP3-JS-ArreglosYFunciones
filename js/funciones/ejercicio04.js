/*
 Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

 let numero = parseInt(prompt("Ingrese el número del que desea ver la tabla de multiplicar: "));

function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}`);
    document.write("<br>")

  }
}
tablaMultiplicar(numero);
