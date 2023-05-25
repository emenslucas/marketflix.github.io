document.addEventListener("DOMContentLoaded", function () {
  // Obtén el botón de "Contáctanos"
  var contactoBtn = document.getElementById("contacto-btn");

  // Agrega un controlador de evento para el clic en el botón
  contactoBtn.addEventListener("click", function () {
    // Redirige a index.html y agrega el fragmento "#contacto" en la URL
    window.location.href = "index.html#contacto";
  });
});
