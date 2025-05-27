// Pregunta 10
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5:", meses[4]);
console.log("Mes 11:", meses[10]);

// Pregunta 11
let meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses2.sort();
console.log("Meses ordenados alfabéticamente:", meses2);

// Pregunta 12
let meses3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses3.unshift("Inicio");
meses3.push("Fin");
console.log("Array con elementos agregados:", meses3);

// Pregunta 13
let meses4 = ["Inicio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Fin"];
meses4.shift();
meses4.pop();
console.log("Array después de quitar elementos:", meses4);

// Pregunta 14
let meses5 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses5.reverse();
console.log("Array invertido:", meses5);


// Pregunta 15
let meses6 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mesesUnidos = meses6.join(" - ");
console.log("Meses unidos en un string:", mesesUnidos);


// Pregunta 16
let meses7 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let copiaParcial = meses7.slice(4, 11);
console.log("Copia del array de Mayo a Noviembre:", copiaParcial);
