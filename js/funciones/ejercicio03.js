/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

let ladoA = parseFloat(prompt("Ingrese el valor del lado A: "));
let ladoB = parseFloat(prompt("Ingrese el valor del lado B: "));

function permietroRectangulo (lado1, lado2){
    let valorPerimetro = 2*(lado1 + lado2);
    return valorPerimetro;
}
let resultado = permietroRectangulo(ladoA,ladoB);

document.write("El valor del perimetro del rectángulo es: " + resultado);