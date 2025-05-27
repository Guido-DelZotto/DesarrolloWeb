// Pregunta 19
let palabras = ["Sol", "Luna", "Estrella", "Cielo", "Nube"];
for (let palabra of palabras) {
  alert(palabra);
}

// Pregunta 20
let palabras1 = ["sol", "luna", "estrella", "cielo", "nube"];
for (let i = 0; i < palabras1.length; i++) {
  let palabra = palabras1[i];
  let palabraCapitalizada = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase();
  alert(palabraCapitalizada);
}


// Pregunta 21
let palabras2 = ["sol", "luna", "estrella", "cielo", "nube"];
let sentence = "";
for (let i = 0; i < palabras2.length; i++) {
  sentence += palabras2[i];
  if (i < palabras2.length - 1) {
    sentence += " ";
  }
}
alert(sentence);


// Pregunta 22
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log("Array final:", numeros);


