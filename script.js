/* =====================================================================
   股神修練院 — Landing behaviour
   Vanilla JS only. No libraries, no analytics, no remote requests.
   Progressive enhancement: the page is fully usable without JS
   (native <details> FAQ, anchor links, CSS-only visuals).
   ===================================================================== */
(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "開啟選單");
  }

  function openMenu() {
    menu.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "關閉選單");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      open ? closeMenu() : openMenu();
    });

    // Close after choosing a destination
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    // Esc closes; click outside closes
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    document.addEventListener("click", function (e) {
      if (
        menu.classList.contains("open") &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Reset menu state when leaving mobile breakpoint
    var mq = window.matchMedia("(min-width: 880px)");
    (mq.addEventListener
      ? mq.addEventListener.bind(mq, "change")
      : mq.addListener.bind(mq))(function () {
      if (mq.matches) closeMenu();
    });
  }

  /* ---- FAQ: single-open accordion (enhances native <details>) ---- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---- Beta CTA guard ----
     Signup URL is configured (https://forms.gle/QdE8Z8xVG24DybPx6), so this guard is
     a no-op in normal operation. It only trips as a safe fallback if a
     [data-beta-cta] href regresses to empty or "#", preventing a dead
     click that silently jumps to the top of the page. */
  document.querySelectorAll("[data-beta-cta]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var href = el.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        console.info(
          "[股神修練院] 封測報名連結未設定（href 為空或 #）。請於 HTML 將 [data-beta-cta] 的 href 設為正式報名網址。"
        );
      }
    });
  });
})();
