window.onload = function () {
  var formSubmitted = sessionStorage.getItem("formSubmitted");
  if (formSubmitted === "true") {
    alert("¡El formulario ha sido enviado correctamente!");
    sessionStorage.removeItem("formSubmitted");
  }
};

function setFormSubmitted() {
  sessionStorage.setItem("formSubmitted", "true");
  setTimeout(function () {
    location.reload();
  }, 1000); // Espera 1 segundo antes de recargar la página (ajusta el tiempo según tus necesidades)
}
