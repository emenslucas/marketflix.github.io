document.addEventListener("DOMContentLoaded", function () {
  var sections = [
    { id: "inicio", element: null },
    { id: "sobreNosotros", element: null },
    { id: "servicios", element: null },
    { id: "contacto", element: null }
  ];

  sections.forEach(function (section) {
    section.element = document.getElementById(section.id);
  });

  sections[0].element.classList.add("show");
  window.addEventListener("scroll", function () {
    sections.forEach(function (section) {
      if (isElementInViewport(section.element)) {
        section.element.classList.add("show");
      }
    });
  });

  // Función para verificar si un elemento está en el viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verificar si el elemento está completamente visible o parcialmente visible en el viewport
    return (
      (rect.top >= 0 && rect.bottom <= windowHeight) ||
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.top <= windowHeight && rect.bottom >= windowHeight)
    );
  }
});
