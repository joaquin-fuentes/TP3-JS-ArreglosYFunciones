/*
1- Escribir el código de una función a la que se pasa como parámetro un número entero y
 devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función. 
 */

 function esPar (numero){
    let cadena = "";
    if(numero % 2 === 0){
        cadena = `El número ${numero} es PAR`;
    } else{
        cadena = `El número ${numero} es IMPAR`;
    }
    return cadena;
 }
 let numeroDePrueba = 5;
 let resultado = esPar(numeroDePrueba);
 document.write(resultado);