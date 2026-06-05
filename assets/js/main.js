/* ============================================================
   Đorđe Klisura — site behavior
   Theme toggle · mobile nav · scroll-spy
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Theme (persisted + respects OS preference) ---------- */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  // Default to dark mode on first visit; remember the visitor's choice afterward.
  var theme = stored || "dark";
  root.setAttribute("data-theme", theme);

  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Mobile nav ---------- */
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("navToggle");
  var backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  document.body.appendChild(backdrop);

  function setNav(open) {
    sidebar.classList.toggle("open", open);
    backdrop.classList.toggle("show", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setNav(!sidebar.classList.contains("open"));
    });
  }
  backdrop.addEventListener("click", function () { setNav(false); });

  // Close mobile nav after clicking a link
  sidebar.addEventListener("click", function (e) {
    if (e.target.closest(".site-nav a") && window.innerWidth <= 820) {
      setNav(false);
    }
  });

  /* ---------- Scroll-spy (highlight active section) ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) visible.add(en.target.id);
        else visible.delete(en.target.id);
      });
      // pick the topmost visible section
      var topId = null, topY = Infinity;
      visible.forEach(function (id) {
        var y = document.getElementById(id).getBoundingClientRect().top;
        if (y < topY) { topY = y; topId = id; }
      });
      navLinks.forEach(function (a) { a.classList.remove("active"); });
      if (topId && byId[topId]) byId[topId].classList.add("active");
    }, { rootMargin: "-10% 0px -75% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".section"));
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealEls.forEach(function (el) { el.classList.add("reveal"); });
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          revObs.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    revealEls.forEach(function (el) { revObs.observe(el); });
  }

  /* ---------- Back to top + scroll progress ---------- */
  var toTop = document.getElementById("toTop");
  var progress = document.getElementById("progress");
  var onScroll = function () {
    var doc = document.documentElement;
    var scrolled = window.scrollY || doc.scrollTop;
    if (toTop) {
      if (scrolled > 500) toTop.classList.add("show");
      else toTop.classList.remove("show");
    }
    if (progress) {
      var max = doc.scrollHeight - doc.clientHeight;
      progress.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    // Date.now is fine in the browser; guard anyway.
    try { yearEl.textContent = String(new Date().getFullYear()); } catch (e) {}
  }
})();
