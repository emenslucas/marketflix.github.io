document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var servicio = urlParams.get("servicio");

  if (servicio === "redes-sociales") {
    document.getElementById("pills-home-tab").classList.add("active");
    document.getElementById("pills-home-tab").setAttribute("aria-selected", "true");
    document.getElementById("pills-home").classList.add("active");
    document.getElementById("pills-home").classList.add("show");
  } else if (servicio === "diseno-web") {
    document.getElementById("pills-profile-tab").classList.add("active");
    document.getElementById("pills-profile-tab").setAttribute("aria-selected", "true");
    document.getElementById("pills-profile").classList.add("active");
    document.getElementById("pills-profile").classList.add("show");
  } else if (servicio === "marketing-branding") {
    document.getElementById("pills-contact-tab").classList.add("active");
    document.getElementById("pills-contact-tab").setAttribute("aria-selected", "true");
    document.getElementById("pills-contact").classList.add("active");
    document.getElementById("pills-contact").classList.add("show");
  }
});