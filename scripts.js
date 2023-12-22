// navbar opaque
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("opaque");
    } else {
      navbar.classList.remove("opaque");
    }
  });
});

//redirect image
function openImagePage(imageId) {
  switch (imageId) {
    case "home-image":
      window.open("pages/home.html", "_blank");
      break;
    case "jamu":
      window.open("pages/jamu.html", "_blank");
      break;
    case "jamu1":
      window.open("pages/jamu1.html", "_blank");
      break;
    case "jamu2":
      window.open("pages/jamu2.html", "_blank");
      break;
    case "jamu3":
      window.open("pages/jamu3.html", "_blank");
      break;
    case "jamu4":
      window.open("pages/jamu4.html", "_blank");
      break;
    case "jamu5":
      window.open("pages/jamu5.html", "_blank");
      break;
    default:
      break;
  }
}
