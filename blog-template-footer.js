
(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

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

      if (pendingNavigation) {
        window.location.href = pendingNavigation;
      }
    }

    document.addEventListener("mouseout", function (e) {
      if (popupVisible || getCookie(COOKIE_NAME)) return;

      if (!e.relatedTarget && e.clientY <= 10) {
        showPopup();
      }
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
      if (e.target === popup) {
        allowExit();
      }
    });

    if (successMessage) {
      new MutationObserver(() => {
        const visible = getComputedStyle(successMessage).display !== "none";

        if (visible) {
          allowExit();
        }
      }).observe(successMessage, { attributes: true });
    }
  });
})();
