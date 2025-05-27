// Pregunta 4
let texto = "javascript es Distinto a Java";
let textoEnMayusculas = texto.toUpperCase();
console.log("Texto en mayúsculas:", textoEnMayusculas);

// Pregunta 5
let frase = "Programación";
let primerosCinco = frase.substring(0, 5);
console.log("Los primeros 5 caracteres son:", primerosCinco);

// Pregunta 6
let palabra = "Desarrollador";
let ultimosTres = palabra.substring(palabra.length - 3);
console.log("Los últimos 3 caracteres son:", ultimosTres);

// Pregunta 7
let palabraOriginal = "pRoGrAmAcIón";
let primeraLetra = palabraOriginal.substring(0, 1).toUpperCase();
let restoPalabra = palabraOriginal.substring(1).toLowerCase();
let palabraFormateada = primeraLetra + restoPalabra;
console.log("Palabra formateada:", palabraFormateada);

// Pregunta 8
let frase2 = "Hola mundo lindo";
let posicionEspacio = frase2.indexOf(" ");
console.log("La posición del primer espacio en blanco es:", posicionEspacio);

// Pregunta 9
let texto2 = "prograMACION AVANZADA";
let espacio = texto2.indexOf(" ");
let palabra3 = texto2.substring(0, espacio);
let palabra4 = texto2.substring(espacio + 1);
let palabra1Formateada = palabra3.substring(0, 1).toUpperCase() + palabra3.substring(1).toLowerCase();
let palabra2Formateada = palabra4.substring(0, 1).toUpperCase() + palabra4.substring(1).toLowerCase();
let resultadoFinal = palabra1Formateada + " " + palabra2Formateada;
console.log("Resultado final:", resultadoFinal);