document.addEventListener("DOMContentLoaded", function () {
  var inicio = document.getElementById("inicio");
  var sobreNosotros = document.getElementById("sobreNosotros");
  var servicios = document.getElementById("servicios");
  var contacto = document.getElementById("contacto");

  inicio.classList.add("show");
  window.addEventListener("scroll", function () {
    if (isElementInViewport(sobreNosotros)) {
      sobreNosotros.classList.add("show");
    }

    if (isElementInViewport(servicios)) {
      servicios.classList.add("show");
    }

    if (isElementInViewport(contacto)) {
      contacto.classList.add("show");
    }
  });

  // Función para verificar si un elemento está en el viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    // Verificar si el elemento estÃ¡ completamente visible o parcialmente visible en el viewport
    return (
      (rect.top >= 0 && rect.bottom <= windowHeight) ||
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.top <= windowHeight && rect.bottom >= windowHeight)
    );
  }
});
