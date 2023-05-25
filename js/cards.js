document.addEventListener("DOMContentLoaded", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var servicio = urlParams.get("servicio");
  var activeTabId = "";
  var activeContentId = "";

  if (servicio === "redes-sociales") {
    activeTabId = "pills-home-tab";
    activeContentId = "pills-home";
  } else if (servicio === "diseno-web") {
    activeTabId = "pills-profile-tab";
    activeContentId = "pills-profile";
  } else if (servicio === "marketing-branding") {
    activeTabId = "pills-contact-tab";
    activeContentId = "pills-contact";
  }

  if (activeTabId && activeContentId) {
    var activeTab = document.getElementById(activeTabId);
    var activeContent = document.getElementById(activeContentId);

    activeTab.classList.add("active");
    activeTab.setAttribute("aria-selected", "true");
    activeContent.classList.add("active");
    activeContent.classList.add("show");
  }
});
