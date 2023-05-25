var fragment = window.location.hash;

// Verifica si hay un fragmento y realiza el desplazamiento
if (fragment) {
  var section = document.querySelector(fragment);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
