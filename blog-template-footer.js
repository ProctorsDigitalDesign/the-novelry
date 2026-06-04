(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  onReady(function () {
    let title = document.title;
    let url = window.location.href;

    $('[data-share-facebook]').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title)).attr('target', '_blank');
    $('[data-share-twitter]').attr('href', 'https://twitter.com/share?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=').attr('target', '_blank');
    $('[data-share-linkedin]').attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=').attr('target', '_blank');
    $('[data-share-whatsapp]').attr('href', 'https://wa.me/?text=' + encodeURIComponent(url)).attr('target', '_blank');

    if ($(".section_blog-other .blog_item-card").length < 1) {
      $(".section_blog-other").hide();
    }
  });

  function initTOC() {
    const contentEl = document.getElementById("toc-content");
    const tocEl = document.getElementById("toc");

    if (!contentEl || !tocEl) return;

    tocEl.innerHTML = "";

    const headings = contentEl.querySelectorAll("h2");

    if (!headings.length) {
      tocEl.style.display = "none";
      return;
    }

    tocEl.style.display = "";

    headings.forEach(function (heading, i) {
      const text = heading.textContent.trim();
      if (!text) return;

      let str = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[°&\/\\#,+()$~%.'":;*?<>{}]/g, "")
        .replace(/[^\w\-]+/g, "");

      if (!str) str = "toc-heading-" + i;

      let uniqueId = str;
      let count = 2;

      while (document.getElementById(uniqueId) && document.getElementById(uniqueId) !== heading) {
        uniqueId = str + "-" + count;
        count++;
      }

      heading.setAttribute("id", uniqueId);

      const item = document.createElement("a");
      item.textContent = text;
      item.className = "tocitem";
      item.href = "#" + uniqueId;

      tocEl.appendChild(item);
    });
  }

  onReady(function () {
    initTOC();
    setTimeout(initTOC, 500);
    setTimeout(initTOC, 1500);

    document.querySelectorAll(".w-richtext-align-center.w-richtext-figure-type-video").forEach((figure) => {
      const iframe = figure.querySelector("iframe");
      if (iframe && iframe.src.includes("embedly.com") && iframe.src.includes("tiktok.com")) {
        figure.style.paddingBottom = "760px";
      }
    });
  });

  onReady(function () {
    document.querySelectorAll(".tag-link").forEach((link) => {
      const tagName = link.querySelector(".tag-text")?.textContent.trim();
      if (tagName) {
        const encoded = tagName.replace(/ /g, "+");
        link.href = `/blog?topic_equal=%5B"${encoded}"%5D`;
      }
    });
  });

  onReady(function () {
    var btn = document.getElementById("backToTop");
    if (!btn) return;

    var fg = btn.querySelector(".progress-ring__fg");
    var circumference = 100;

    function updateProgress() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (fg) {
        fg.style.strokeDasharray = circumference;
        fg.style.strokeDashoffset = circumference - scrolled;
      }

      btn.classList.toggle("is-visible", scrollTop > 400);
    }

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  });

  onReady(function () {
    document.querySelectorAll(".carouse_content_wrapper, .carouse_content-wrapper").forEach(function (section) {
      const slider = section.querySelector(".courses-slider");
      const track = section.querySelector(".courses-track");
      const nextBtn = section.querySelector(".courses-next");
      const prevBtn = section.querySelector(".courses-prev");
      const scrollbarEl = section.querySelector(".courses-scrollbar");
      const navigationWrap = section.querySelector(".courses-navigation");
      const slides = Array.from(section.querySelectorAll(".courses-slide"));

      if (!slider || !track || !slides.length) return;

      let swiperInstance = null;
      let resizeRaf = null;

      function getSlidesTotalWidth() {
        return slides.reduce((total, slide) => {
          const styles = window.getComputedStyle(slide);
          const marginLeft = parseFloat(styles.marginLeft) || 0;
          const marginRight = parseFloat(styles.marginRight) || 0;
          return total + slide.offsetWidth + marginLeft + marginRight;
        }, 0);
      }

      function shouldEnableSlider() {
        return getSlidesTotalWidth() > slider.clientWidth + 1;
      }

      function showNavigation() {
        if (navigationWrap) navigationWrap.style.display = "";
      }

      function hideNavigation() {
        if (navigationWrap) navigationWrap.style.display = "none";
      }

      function enableStaticMode() {
        if (swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
        }

        slider.classList.remove("is-swiper-active");
        hideNavigation();

        track.style.transform = "";
        track.style.transitionDuration = "";
      }

      function enableSliderMode() {
        if (swiperInstance || typeof Swiper === "undefined") return;

        slider.classList.add("is-swiper-active");
        showNavigation();

        swiperInstance = new Swiper(slider, {
          wrapperClass: "courses-track",
          slideClass: "courses-slide",
          loop: slides.length > 1,
          speed: 700,
          grabCursor: true,
          watchOverflow: true,
          observer: true,
          observeParents: true,
          slidesPerView: "auto",
          navigation: nextBtn && prevBtn ? { nextEl: nextBtn, prevEl: prevBtn } : false,
          scrollbar: scrollbarEl ? { el: scrollbarEl, draggable: false, dragSize: 140, hide: false } : false
        });
      }

      function updateSliderState() {
        if (shouldEnableSlider()) {
          enableSliderMode();
        } else {
          enableStaticMode();
        }
      }

      updateSliderState();

      window.addEventListener("resize", function () {
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(updateSliderState);
      });
    });
  });

  onReady(function () {
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
      date.setTime(date.getTime() + days * 86400000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
    }

    function getCookie(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)" + name + "=([^;]+)"));
      return match ? match[2] : null;
    }

    function disableScroll() {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }

    function enableScroll() {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }

    function showPopup() {
      if (popupVisible || getCookie(COOKIE_NAME)) return;
      popup.style.display = "flex";
      popupVisible = true;
      disableScroll();
    }

    function allowExit() {
      setCookie(COOKIE_NAME, "true", COOKIE_DAYS);
      popup.style.display = "none";
      popupVisible = false;
      enableScroll();
      if (pendingNavigation) window.location.href = pendingNavigation;
    }

    document.addEventListener("mouseout", function (e) {
      if (popupVisible || getCookie(COOKIE_NAME)) return;
      if (!e.relatedTarget && e.clientY <= 10) showPopup();
    });

    document.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (!link || popupVisible || getCookie(COOKIE_NAME)) return;
      if (link.href && link.origin === location.origin && !link.href.includes("#")) {
        e.preventDefault();
        pendingNavigation = link.href;
        showPopup();
      }
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

    if (successMessage) {
      new MutationObserver(() => {
        const visible = getComputedStyle(successMessage).display !== "none";
        if (visible) allowExit();
      }).observe(successMessage, { attributes: true });
    }
  });
})();
