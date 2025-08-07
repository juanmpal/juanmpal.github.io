document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href]').forEach(function(link) {
    // Skip links inside the header
    if (link.closest('.header')) return;
    var href = link.getAttribute('href');
    if (!link.target && href && !href.startsWith('#')) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
});
