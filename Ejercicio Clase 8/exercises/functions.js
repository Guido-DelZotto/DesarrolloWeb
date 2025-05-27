// Pregunta 23
function suma(a, b) {
  return a + b;
}
let resultado = suma(5, 8);
console.log("El resultado de la suma es:", resultado);


// Pregunta 24
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Error: uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}
let resultado1 = suma(10, 5);
console.log("Resultado válido:", resultado1);
let resultado2 = suma(10, "hola");
console.log("Resultado con error:", resultado2);

// Pregunta 25
function validateInteger(num) {
  return Number.isInteger(num);
}
console.log(validateInteger(10));    
console.log(validateInteger(10.5));   
console.log(validateInteger("10"));   


// Pregunta 26
function validateInteger(num) {
  return Number.isInteger(num);
}
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Error: uno de los parámetros no es un número");
    return NaN;
  }
  if (!validateInteger(a)) {
    alert("Advertencia: el primer número no es entero. Será redondeado.");
    a = Math.round(a);
  }
  if (!validateInteger(b)) {
    alert("Advertencia: el segundo número no es entero. Será redondeado.");
    b = Math.round(b);
  }

  return a + b;
}
let resultado3 = suma(4.6, 7.2); 
console.log("Resultado:", resultado3); 



// Pregunta 27
function validarEnteroConAlerta(num, nombre) {
  if (!Number.isInteger(num)) {
    alert(`Advertencia: el número ${nombre} no es entero. Será redondeado.`);
    return Math.round(num);
  }
  return num;
}
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Error: uno de los parámetros no es un número");
    return NaN;
  }

  a = validarEnteroConAlerta(a, "a");
  b = validarEnteroConAlerta(b, "b");

  return a + b;
}
let resultado4 = suma(3.2, 7.8);
console.log("Resultado:", resultado4);


