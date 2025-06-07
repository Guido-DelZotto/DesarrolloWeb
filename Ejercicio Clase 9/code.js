const form = document.getElementById("suscripcionForm");
const tituloForm = document.getElementById("titulo-formulario");

// Validaciones individuales
const validaciones = {
  nombre: (valor) => valor.length >= 6 && valor.includes(" "),
  email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
  password: (valor) => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(valor),
  repetir: (valor) => valor === document.getElementById("password").value,
  edad: (valor) => parseInt(valor) >= 18,
  telefono: (valor) => /^[0-9]{7,10}$/.test(valor),
  direccion: (valor) => /^[\w\s]{5,}$/.test(valor),
  ciudad: (valor) => valor.trim().length >= 3,
  cp: (valor) => valor.trim().length >= 3,
  dni: (valor) => /^[0-9]{7,8}$/.test(valor)
};

// Mostrar mensaje de error
function mostrarError(id, mensaje) {
  document.getElementById(`error-${id}`).textContent = mensaje;
}

// Borrar error al enfocar
function limpiarError(id) {
  document.getElementById(`error-${id}`).textContent = "";
}

// Eventos blur y focus
Object.keys(validaciones).forEach((id) => {
  const input = document.getElementById(id);
  
  input.addEventListener("blur", () => {
    const valido = validaciones[id](input.value);
    if (!valido) mostrarError(id, "Campo inválido");
  });

  input.addEventListener("focus", () => limpiarError(id));

  // BONUS: Actualización en vivo del título
  if (id === "nombre") {
    input.addEventListener("keydown", () => {
      const nombre = input.value.trim();
      if (validaciones.nombre(nombre)) {
        tituloForm.textContent = `HOLA ${nombre.toUpperCase()}`;
      } else {
        tituloForm.textContent = `Suscribite a nuestro boletín`;
      }
    });
  }
});

// Evento final de envío
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valido = true;
  const datos = {};

  Object.keys(validaciones).forEach((id) => {
    const valor = document.getElementById(id).value.trim();
    if (!validaciones[id](valor)) {
      mostrarError(id, "Campo inválido");
      valido = false;
    } else {
      limpiarError(id);
      datos[id] = valor;
    }
  });

  if (valido) {
    alert(`Datos cargados:\n\n${Object.entries(datos)
      .map(([k, v]) => `${k.toUpperCase()}: ${v}`)
      .join("\n")}`);
    form.reset();
    tituloForm.textContent = "Suscribite a nuestro boletín";
  }
});
