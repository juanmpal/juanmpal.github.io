document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".last-update").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });
});
