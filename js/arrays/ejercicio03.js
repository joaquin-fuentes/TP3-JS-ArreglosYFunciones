/*
 Escribir un script que simule el lanzamiento de dos dados. 
 Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
 Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

let sumas = new Array(11);
for (let i = 0; i < sumas.length; i++) {
  sumas[i] = 0;
}

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  
  let suma = dado1 + dado2;
  
  switch (suma) {
    case 2:
      sumas[0]++;
      break;
    case 3:
      sumas[1]++;
      break;
    case 4:
      sumas[2]++;
      break;
    case 5:
      sumas[3]++;
      break;
    case 6:
      sumas[4]++;
      break;
    case 7:
      sumas[5]++;
      break;
    case 8:
      sumas[6]++;
      break;
    case 9:
      sumas[7]++;
      break;
    case 10:
      sumas[8]++;
      break;
    case 11:
      sumas[9]++;
      break;
    case 12:
      sumas[10]++;
      break;
    default:
      break;
  }
}

for (let i = 0; i < sumas.length; i++) {
  document.write("Número de apariciones de " + (i+2) + ": " + sumas[i] + "<br>");
}
