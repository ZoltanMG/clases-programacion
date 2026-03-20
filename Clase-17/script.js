function mostrarMensaje() {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;

  if (nombre === "" || edad === "") {
    document.getElementById("resultado").innerText = "Por favor completa todos los campos";
    return;
  }

  let edadNumero = Number(edad);
  let mensaje = "";

  if (edadNumero >= 18) {
    mensaje = "Hola " + nombre + ", eres mayor de edad";
  } else {
    mensaje = "Hola " + nombre + ", eres menor de edad";
  }

  document.getElementById("resultado").innerText = mensaje;
  alert(mensaje)
}
