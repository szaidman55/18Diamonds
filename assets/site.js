(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Solid header once the page scrolls
  var header = document.querySelector(".site-header");
  if (header && !header.classList.contains("solid")) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Fade sections in as they enter the viewport
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach(function (el) {
    io.observe(el);
  });
})();
