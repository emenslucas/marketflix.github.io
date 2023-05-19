window.onload = function () {
  var formSubmitted = sessionStorage.getItem("formSubmitted");
  if (formSubmitted === "true") {
    alert("¡El formulario ha sido enviado correctamente!");
    sessionStorage.removeItem("formSubmitted");
  }
};

function setFormSubmitted() {
  sessionStorage.setItem("formSubmitted", "true");
}
