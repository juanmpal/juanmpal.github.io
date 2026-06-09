document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".last-update").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  document.querySelectorAll("details").forEach(function (details) {
    details.addEventListener("toggle", function () {
      const abstract = details.querySelector(":scope > summary + p");

      if (!abstract || !details.open) return;

      abstract.style.animation = "none";
      void abstract.offsetWidth;
      abstract.style.animation = "";
    });
  });
});
