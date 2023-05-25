$(function () {
  var $navbar = $(".navbar");
  var $navbarSubContainer = $(".navbar-subContainer");
  var $navbarNav = $(".navbar-nav");
  var clickCount = 0;
  var currentSectionId = null;
  var $navbarBrand = $(".navbar-brand");

  function updateNavbarSubContainerWidth() {
    var isCollapseHidden =
      $(".navbar-collapse").is(":hidden") ||
      $(".navbar-collapse").hasClass("show");

    if (isCollapseHidden) {
      // MOBILE
      $navbarSubContainer.css("width", "100%");
      $navbar.removeClass("scrolled", $(window).scrollTop() > 0);
    } else {
      // ESCRITORIO
      $navbarSubContainer.css("width", "0%");
      $navbarSubContainer.removeClass("scrolled");
      $navbar.toggleClass("scrolled", $(window).scrollTop() > 0);
    }
  }

  function toggleNavbarClass() {
    $navbarSubContainer
      .add(".navbar-toggler")
      .toggleClass(
        "scrolled",
        $(window).scrollTop() > 0 || clickCount % 2 !== 0
      );
  }

  function toggleBgColor() {
    $navbarNav.toggleClass("bg-color");
    updateNavbarSubContainerWidth();
  }

  function toggleScrolledClass() {
    $navbarSubContainer
      .add(".navbar-toggler")
      .toggleClass("scrolled", ++clickCount % 2 !== 0);
  }

  function changeNavItemColor() {
    var $sections = $("section");
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var $navItems = $(".nav-item");

    $sections.each(function () {
      var $section = $(this);
      var sectionId = $section.attr("id");
      var navLink = $("a[href='#" + sectionId + "']");
      var navItem = navLink.closest(".nav-item");

      var sectionTop = $section.offset().top;
      var sectionHeight = $section.outerHeight();
      var sectionBottom = sectionTop + sectionHeight;

      if (
        windowTop >= sectionTop - windowHeight / 2 &&
        windowTop <= sectionBottom - windowHeight / 2
      ) {
        if (sectionId !== currentSectionId) {
          $navItems.removeClass("bg-color");
          navItem.addClass("bg-color");
          currentSectionId = sectionId;
        }
      }
    });

    // Ocultar el div con la clase "navbar-brand" si el usuario está en la sección con el id "inicio"
    if (currentSectionId != "inicio") {
      $navbarBrand.addClass("mostrar");
    } else {
      $navbarBrand.removeClass("mostrar");
    }
  }

  $(window).on("scroll resize", function () {
    toggleNavbarClass();
    updateNavbarSubContainerWidth();
    changeNavItemColor();
  });

  $(".navbar-collapse").on("show.bs.collapse hide.bs.collapse", toggleBgColor);
  $(".navbar-toggler").click(toggleScrolledClass);

  $(".nav-link").click(function () {
    clickCount++;
    $(".navbar-toggler").addClass("collapsed").attr("aria-expanded", "false");
    $navbarSubContainer.removeClass("scrolled");
    $(".navbar-collapse").removeClass("show");
    $navbarNav.removeClass("bg-color");
  });

  updateNavbarSubContainerWidth();

  $(window).on("load", changeNavItemColor);
});
