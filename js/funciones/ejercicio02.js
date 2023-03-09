/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
 sólo por minúsculas o por una mezcla de ambas. 
 */

 function mayusculasMinusculas(cadena) {
    let tipoLetra = ""
    if (cadena === cadena.toUpperCase()) {
      tipoLetra = "La cadena está formada sólo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
      tipoLetra = "La cadena está formada sólo por minúsculas.";
    } else {
      tipoLetra = "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
    return tipoLetra
  }
  
  // Ejemplo de uso
  let cadenaPRueba = "hola estoy escribiendo solo con minusculas";
  let resultado = mayusculasMinusculas(cadenaPRueba);
  document.write(resultado);
  