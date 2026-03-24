document.addEventListener("DOMContentLoaded", function () {
  const contentEl = document.getElementById("content");
  const tocEl = document.getElementById("toc");

  if (contentEl && tocEl) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        if (entry.isIntersecting) {
          document.querySelectorAll(".active").forEach((el) => {
            el.classList.remove("active");
          });

          const activeLink = document.querySelector(`a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    }, { rootMargin: "0px 0px -75% 0px" });

    contentEl.querySelectorAll("h2").forEach(function (heading, i) {
      let str = heading.textContent.trim();
      str = str
        .replace(/\s+/g, "-")
        .replace(/[°&\/\\#,+()$~%.'":;*?<>{}]/g, "")
        .toLowerCase();

      if (!str) str = "toc-" + i;
      heading.setAttribute("id", str);

      observer.observe(heading);

      const item = document.createElement("a");
      item.innerHTML = heading.innerHTML;
      item.setAttribute("class", "tocitem");
      item.setAttribute("href", "#" + str);
      tocEl.appendChild(item);
    });
  }

  document.querySelectorAll(".w-richtext-align-center.w-richtext-figure-type-video").forEach((figure) => {
    const iframe = figure.querySelector("iframe");

    if (iframe && iframe.src.includes("embedly.com") && iframe.src.includes("tiktok.com")) {
      figure.style.paddingBottom = "760px";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tagLinks = document.querySelectorAll(".tag-link");

  tagLinks.forEach((link) => {
    const tagName = link.querySelector(".tag-text")?.textContent.trim();

    if (tagName) {
      const customEncoded = tagName.replace(/ /g, "+");
      const finalHref = `/blog?topic_equal=%5B"${customEncoded}"%5D`;
      link.href = finalHref;
    }
  });
});

(function () {
  var btn = document.getElementById("backToTop");
  if (!btn) return;

  var fg = btn.querySelector(".progress-ring__fg");
  var circumference = 100;
  var showAfter = 400;

  function updateProgress() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (fg) {
      fg.style.strokeDasharray = circumference;
      fg.style.strokeDashoffset = circumference - scrolled;
    }

    if (scrollTop > showAfter) {
      if (btn.hidden) btn.hidden = false;
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  }

  function scrollToTop() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ("scrollBehavior" in document.documentElement.style && !reduce) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  btn.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carouse_content_wrapper, .carouse_content-wrapper").forEach(function (section) {
    const slider = section.querySelector(".courses-slider");
    const nextBtn = section.querySelector(".courses-next");
    const prevBtn = section.querySelector(".courses-prev");
    const scrollbarEl = section.querySelector(".courses-scrollbar");
    const slides = section.querySelectorAll(".courses-slide");

    if (!slider || !slides.length) return;

    new Swiper(slider, {
      wrapperClass: "courses-track",
      slideClass: "courses-slide",
      loop: slides.length > 1,
      speed: 700,
      grabCursor: true,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      navigation: (nextBtn && prevBtn) ? {
        nextEl: nextBtn,
        prevEl: prevBtn
      } : false,
      scrollbar: scrollbarEl ? {
        el: scrollbarEl,
        draggable: false,
        dragSize: 140,
        hide: false
      } : false,
      on: {
        init: function () {
          if (scrollbarEl) {
            const drag = scrollbarEl.querySelector(".swiper-scrollbar-drag");
            if (drag) {
              drag.style.background = "#ea602a";
              drag.style.borderRadius = "999px";
            }
          }
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".newsletter-popup");
  const exitBtn = document.getElementById("exit");
  const successMessage = document.querySelector(".popup-success, .popup-form .w-form-done");

  if (!popup) return;

  const COOKIE_NAME = "newsletter_popup_seen";
  const COOKIE_DAYS = 30;

  let popupVisible = false;
  let pendingNavigation = null;
  let scrollY = 0;

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]+)"));
    return match ? match[2] : null;
  }

  function hasSeenPopup() {
    return !!getCookie(COOKIE_NAME);
  }

  function rememberUser() {
    setCookie(COOKIE_NAME, "true", COOKIE_DAYS);
  }

  function disableScroll() {
    scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
  }

  function showPopup() {
    if (popupVisible || hasSeenPopup()) return;
    popup.style.display = "flex";
    popupVisible = true;
    disableScroll();
  }

  function hidePopup() {
    popup.style.display = "none";
    popupVisible = false;
    enableScroll();
  }

  function allowExit() {
    rememberUser();
    hidePopup();
    if (pendingNavigation) {
      const url = pendingNavigation;
      pendingNavigation = null;
      window.location.href = url;
    }
  }

  function isRealPageLink(link) {
    if (!link || !link.href) return false;
    if (link.target === "_blank") return false;
    if (link.hasAttribute("download")) return false;
    if (link.getAttribute("href").startsWith("#")) return false;
    if (link.href.startsWith("mailto:")) return false;
    if (link.href.startsWith("tel:")) return false;

    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL(link.href, window.location.origin);

    if (targetUrl.origin !== currentUrl.origin) return false;

    if (
      targetUrl.pathname === currentUrl.pathname &&
      targetUrl.search === currentUrl.search &&
      targetUrl.hash !== ""
    ) {
      return false;
    }

    return true;
  }

  document.addEventListener("mouseout", function (e) {
    if (hasSeenPopup() || popupVisible) return;
    const leavingWindow = !e.relatedTarget && !e.toElement;
    const leavingTop = e.clientY <= 10;
    if (leavingWindow && leavingTop) showPopup();
  });

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!isRealPageLink(link)) return;
    if (hasSeenPopup()) return;
    if (popupVisible) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    pendingNavigation = link.href;
    showPopup();
  });

  if (exitBtn) {
    exitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      allowExit();
    });
  }

  popup.addEventListener("click", function (e) {
    if (e.target === popup) allowExit();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popupVisible) allowExit();
  });

  if (successMessage) {
    const observer = new MutationObserver(function () {
      const style = window.getComputedStyle(successMessage);
      const isVisible = style.display !== "none" && style.visibility !== "hidden";
      if (isVisible) allowExit();
    });

    observer.observe(successMessage, {
      attributes: true,
      attributeFilter: ["style", "class"]
    });
  }
});
