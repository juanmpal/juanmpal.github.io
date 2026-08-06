document.addEventListener("DOMContentLoaded", function() {
  function decodeEmail(codes, id) {
    var addr = codes.map(function(n) { return String.fromCharCode(n); }).join('');
    var el = document.getElementById(id);
    if (el) {
      el.innerHTML = '<a href="mailto:' + addr + '"><b>' + addr + '</b></a>';
    }
  }
  decodeEmail([106,117,97,110,46,112,97,108,64,116,115,101,45,102,114,46,101,117], 'e1'); // TSE
  decodeEmail([106,117,97,110,109,97,114,116,105,110,112,97,108,64,103,109,97,105,108,46,99,111,109], 'e2'); // Gmail
  decodeEmail([106,117,97,110,46,112,97,108,64,117,99,46,99,108], 'e3'); // UC

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
