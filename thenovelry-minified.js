const heroQuoteSwiper = new Swiper(".hero-quote-carousel", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  navigation: {
    nextEl: "#hero-quote-carousel_button-next",
    prevEl: "#hero-quote-carousel_button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  scrollbar: {
    el: "#hero-quote-carousel_scrollbar",
    draggable: !0
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    580: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
    1200: { slidesPerView: 1 }
  }
});

const heroSwiperEl = document.querySelector(".hero-quote-carousel");
if (heroSwiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? heroQuoteSwiper.autoplay.start() : heroQuoteSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(heroSwiperEl);

  const rect = heroSwiperEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    heroQuoteSwiper.autoplay.stop();
  }
}

const teamprevSwiperWide = new Swiper(".team-prev_swiper-wide", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 24,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    580: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  },
  navigation: {
    nextEl: "#team-prev_swiper-wide_button-next",
    prevEl: "#team-prev_swiper-wide_button-prev"
  },
  scrollbar: {
    el: "#team-prev_swiper-wide_scrollbar",
    draggable: !0
  }
});

let teamSwiperEl = document.querySelector(".team-prev_swiper-wide");
if (teamSwiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? teamprevSwiperWide.autoplay.start() : teamprevSwiperWide.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(teamSwiperEl);

  if (teamSwiperEl.getBoundingClientRect) {
    const rect = teamSwiperEl.getBoundingClientRect();
    if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
      teamprevSwiperWide.autoplay.stop();
    }
  }
}

const threeColTestimonialSwiper = new Swiper(".testimonial-slider_swiper", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 32,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    580: { slidesPerView: 2, spaceBetween: 24 },
    992: { slidesPerView: 3, spaceBetween: 32 },
    1200: { slidesPerView: 3 }
  },
  navigation: {
    nextEl: "#three-col_testimonial-swiper_button-next",
    prevEl: "#three-col_testimonial-swiper_button-prev"
  },
  scrollbar: {
    el: "#three-col_testimonial-swiper_scrollbar",
    draggable: !0
  }
});

const swiperEl = document.querySelector(".testimonial-slider_swiper");
if (swiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? threeColTestimonialSwiper.autoplay.start() : threeColTestimonialSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(swiperEl);
}

const successSwiper = new Swiper(".success-stories_swiper", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 2, spaceBetween: 16 },
    992: { slidesPerView: 3, spaceBetween: 24 },
    1200: { slidesPerView: 3, spaceBetween: 32 }
  },
  navigation: {
    nextEl: "#success-stories_button-next",
    prevEl: "#success-stories_button-prev"
  },
  scrollbar: {
    el: "#success-stories_scrollbar",
    draggable: !0
  }
});

const successSwiperEl = document.querySelector(".success-stories_swiper");
if (successSwiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? successSwiper.autoplay.start() : successSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(successSwiperEl);

  const rect = successSwiperEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    successSwiper.autoplay.stop();
  }
}

const submissionsSwiper = new Swiper(".submissions_swiper", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 2, spaceBetween: 16 },
    992: { slidesPerView: 2, spaceBetween: 24 },
    1200: { slidesPerView: 2, spaceBetween: 32 }
  },
  navigation: {
    nextEl: "#submissions_button-next",
    prevEl: "#submissions_button-prev"
  },
  scrollbar: {
    el: "#submissions_scrollbar",
    draggable: !0
  }
});

const submissionsSwiperEl = document.querySelector(".submissions_swiper");
if (submissionsSwiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? submissionsSwiper.autoplay.start() : submissionsSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(submissionsSwiperEl);

  const rect = submissionsSwiperEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    submissionsSwiper.autoplay.stop();
  }
}

/* =========================
   SHARED MANUAL SCROLLBAR
========================= */
function getEffectiveSlidesPerView(swiper) {
  const bp = swiper.currentBreakpoint;
  const bpParams = bp && swiper.params.breakpoints && swiper.params.breakpoints[bp]
    ? swiper.params.breakpoints[bp]
    : null;

  let spv = bpParams && bpParams.slidesPerView != null
    ? bpParams.slidesPerView
    : swiper.params.slidesPerView;

  if (spv === "auto") spv = 1;
  spv = Number(spv);

  if (!Number.isFinite(spv) || spv <= 0) spv = 1;
  return spv;
}

function ensureManualScrollbar(scrollbarEl) {
  if (!scrollbarEl) return null;

  /* FIX: do NOT reuse ".swiper-scrollbar-drag" — Webflow/Swiper CSS targets
     that class and forces transitions back on. Use a neutral class name. */
  let dragEl = scrollbarEl.querySelector(".manual-scrollbar-drag");
  if (!dragEl) {
    dragEl = document.createElement("div");
    dragEl.className = "manual-scrollbar-drag";
    scrollbarEl.appendChild(dragEl);
  }

  scrollbarEl.style.cssText += ";position:relative;overflow:hidden;cursor:pointer;";
  dragEl.style.cssText = "position:absolute;left:0;top:0;height:100%;will-change:transform,width;transition:none !important;pointer-events:none;border-radius:inherit;";

  return dragEl;
}

/**
 * FIX: Accept an optional rawTranslate for live-drag scenarios.
 * During touchMove/sliderMove Swiper's .progress hasn't been updated yet,
 * so we derive progress from the raw translate value ourselves.
 */
function syncManualScrollbar(swiper, scrollbarEl, rawTranslate) {
  if (!swiper || !scrollbarEl) return;

  const dragEl = ensureManualScrollbar(scrollbarEl);
  if (!dragEl) return;

  const trackWidth = scrollbarEl.clientWidth;
  if (!trackWidth) return;

  const totalSlides = swiper.slides && swiper.slides.length ? swiper.slides.length : 1;
  const slidesPerView = getEffectiveSlidesPerView(swiper);

  let visibleRatio = slidesPerView / totalSlides;
  visibleRatio = Math.max(0.18, Math.min(1, visibleRatio));

  const dragWidth = trackWidth * visibleRatio;
  const maxTranslate = Math.max(trackWidth - dragWidth, 0);

  let progress;

  if (rawTranslate !== undefined && Number.isFinite(rawTranslate)) {
    /* Derive progress from the live translate during active drag */
    const minT = swiper.minTranslate();
    const maxT = swiper.maxTranslate();
    const range = minT - maxT; // both are negative; minT is closer to 0
    progress = range !== 0 ? (minT - rawTranslate) / range : 0;
  } else {
    progress = swiper.progress;
  }

  if (!Number.isFinite(progress)) progress = 0;
  progress = Math.max(0, Math.min(1, progress));

  /* FIX: suppress transition during drag so there's no lag/glitch */
  const isDragging = swiper.touches && swiper.touches.diff !== 0 && swiper.animating === false;
  dragEl.style.transition = isDragging ? "none" : "";

  dragEl.style.width = `${dragWidth}px`;
  dragEl.style.transform = `translate3d(${maxTranslate * progress}px, 0, 0)`;
}

function attachAutoplayObserver(swiper, el) {
  if (!swiper || !el) return;

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? swiper.autoplay.start() : swiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(el);

  const rect = el.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    swiper.autoplay.stop();
  }
}

function bindManualScrollbar(swiper, scrollbarEl) {
  if (!swiper || !scrollbarEl) return;

  /* FIX: Strip any Swiper-owned scrollbar CSS class that carries built-in
     transitions/animations — those conflict with manual rendering. */
  scrollbarEl.classList.remove("swiper-scrollbar");

  const update = () => syncManualScrollbar(swiper, scrollbarEl);

  /* FIX: sliderMove receives the raw currentTranslate — pass it through
     so the bar moves in real-time during finger drag without snapping. */
  const updateFromMove = (_swiper, translate) => syncManualScrollbar(swiper, scrollbarEl, translate);

  swiper.on("init",           update);
  swiper.on("progress",       update);
  swiper.on("setTranslate",   update);
  swiper.on("sliderMove",     updateFromMove);  // ← raw translate during drag
  swiper.on("touchMove",      updateFromMove);  // ← belt-and-suspenders
  swiper.on("slideChange",    update);
  swiper.on("transitionEnd",  update);
  swiper.on("resize",         update);
  swiper.on("observerUpdate", update);
  swiper.on("breakpoint",     update);
  swiper.on("update",         update);

  /* FIX: also snap bar back cleanly when touch ends */
  swiper.on("touchEnd", update);

  requestAnimationFrame(() => {
    swiper.update();
    update();
  });

  window.addEventListener("resize", update);
}

/* =========================
   EDITOR SLIDER
========================= */
(() => {
  const sliderEl    = document.getElementById("editor-slider");
  const controlsEl  = document.getElementById("editor-controls");
  const nextEl      = document.getElementById("editor-slider_button-next");
  const prevEl      = document.getElementById("editor-slider_button-prev");

  /* FIX: Webflow doesn't assign the custom ID to the scrollbar element —
     it only has the class "swiper-scrollbar". Look it up relative to the
     slider's parent container so we don't accidentally grab a different
     slider's scrollbar. Falls back to the ID in case it does exist. */
  const scrollbarEl = document.getElementById("editor-slider_scrollbar")
    || (sliderEl && sliderEl.closest(".slider-navigation-wrapper, [id*='editor'], section, .section")
        ? sliderEl.closest(".slider-navigation-wrapper, [id*='editor'], section, .section").querySelector(".swiper-scrollbar")
        : null)
    || (sliderEl && sliderEl.parentElement
        ? sliderEl.parentElement.querySelector(".swiper-scrollbar")
        : null);

  if (!sliderEl) return;

  /* FIX: Prevent Swiper from auto-adopting the .swiper-scrollbar element
     (which sits outside the wrapper) by renaming its class before init,
     then restoring after — this stops Swiper's scrollbar module from
     hijacking it and injecting its own drag logic. */
  if (scrollbarEl) {
    scrollbarEl.classList.remove("swiper-scrollbar");
    scrollbarEl.setAttribute("data-manual-scrollbar", "editor");
  }

  if (controlsEl) {
    sliderEl.appendChild(controlsEl);
  }

  const editorSwiper = new Swiper(sliderEl, {
    direction: "horizontal",
    watchSlidesProgress: !0,
    slidesPerView: 1,
    spaceBetween: 32,
    threshold: 20,
    centeredSlides: !1,
    speed: 400,
    autoplay: {
      delay: 4e3,
      disableOnInteraction: !1,
      pauseOnMouseEnter: !0
    },
    rewind: !0,
    mousewheel: {
      forceToAxis: !0,
      releaseOnEdges: !0
    },
    observer: !0,
    observeParents: !0,
    updateOnWindowResize: !0,
    breakpoints: {
      320: { slidesPerView: 1 },
      580: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 32 },
      1200: { slidesPerView: 3 }
    },
    navigation: nextEl && prevEl ? { nextEl, prevEl } : !1,
    scrollbar: !1   // manual scrollbar — no Swiper built-in
  });

  attachAutoplayObserver(editorSwiper, sliderEl);
  bindManualScrollbar(editorSwiper, scrollbarEl);
})();

/* =========================
   COACHES SLIDER
========================= */
(() => {
  const sliderEl    = document.getElementById("coaches-slider");
  const controlsEl  = document.getElementById("coaches-controls");
  const nextEl      = document.getElementById("coaches-slider_button-next");
  const prevEl      = document.getElementById("coaches-slider_button-prev");

  /* FIX: same Webflow class-only scrollbar lookup as editor slider */
  const scrollbarEl = document.getElementById("coaches-slider_scrollbar")
    || (sliderEl && sliderEl.closest(".slider-navigation-wrapper, [id*='coaches'], section, .section")
        ? sliderEl.closest(".slider-navigation-wrapper, [id*='coaches'], section, .section").querySelector(".swiper-scrollbar")
        : null)
    || (sliderEl && sliderEl.parentElement
        ? sliderEl.parentElement.querySelector(".swiper-scrollbar")
        : null);

  if (!sliderEl) return;

  /* FIX: prevent Swiper from hijacking this scrollbar element */
  if (scrollbarEl) {
    scrollbarEl.classList.remove("swiper-scrollbar");
    scrollbarEl.setAttribute("data-manual-scrollbar", "coaches");
  }

  if (controlsEl) {
    sliderEl.appendChild(controlsEl);
  }

  const coachesSwiper = new Swiper(sliderEl, {
    direction: "horizontal",
    watchSlidesProgress: !0,
    slidesPerView: 1,
    spaceBetween: 32,
    threshold: 20,
    centeredSlides: !1,
    speed: 400,
    autoplay: {
      delay: 4e3,
      disableOnInteraction: !1,
      pauseOnMouseEnter: !0
    },
    rewind: !0,
    mousewheel: {
      forceToAxis: !0,
      releaseOnEdges: !0
    },
    observer: !0,
    observeParents: !0,
    updateOnWindowResize: !0,
    breakpoints: {
      320: { slidesPerView: 1 },
      580: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 32 },
      1200: { slidesPerView: 3 }
    },
    navigation: nextEl && prevEl ? { nextEl, prevEl } : !1,
    scrollbar: !1   // manual scrollbar — no Swiper built-in
  });

  attachAutoplayObserver(coachesSwiper, sliderEl);
  bindManualScrollbar(coachesSwiper, scrollbarEl);
})();

const eventsSwiper = new Swiper(".events_swiper", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 2, spaceBetween: 16 },
    992: { slidesPerView: 2, spaceBetween: 24 },
    1200: { slidesPerView: 2, spaceBetween: 32 }
  },
  navigation: {
    nextEl: "#events_button-next",
    prevEl: "#events_button-prev"
  },
  scrollbar: {
    el: "#events_scrollbar",
    draggable: !0
  }
});

const pasteventsSwiper = new Swiper(".past-events_swiper", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 16 },
    480: { slidesPerView: 2, spaceBetween: 16 },
    992: { slidesPerView: 2, spaceBetween: 24 },
    1200: { slidesPerView: 2, spaceBetween: 32 }
  },
  navigation: {
    nextEl: "#past-events_button-next",
    prevEl: "#past-events_button-prev"
  },
  scrollbar: {
    el: "#past-events_scrollbar",
    draggable: !0
  }
});

function enableAutoplayOnView(swiper, selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? swiper.autoplay.start() : swiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(el);

  const rect = el.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    swiper.autoplay.stop();
  }
}

enableAutoplayOnView(eventsSwiper, ".events_swiper");
enableAutoplayOnView(pasteventsSwiper, ".past-events_swiper");

const novelsSwiper = new Swiper(".swiper-novels", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 24,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    580: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 3 }
  },
  navigation: {
    nextEl: "#novels_button-next",
    prevEl: "#novels_button-prev"
  },
  scrollbar: {
    el: "#novels_scrollbar",
    draggable: !0
  }
});

const novelsSwiperEl = document.querySelector(".swiper-novels");
if (novelsSwiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? novelsSwiper.autoplay.start() : novelsSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(novelsSwiperEl);

  const rect = novelsSwiperEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    novelsSwiper.autoplay.stop();
  }
}

const reviewsSwiper = new Swiper(".reviews_swiper", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 8e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    992: { slidesPerView: 2, spaceBetween: 24 },
    1200: { slidesPerView: 2, spaceBetween: 32 }
  },
  navigation: {
    nextEl: "#reviews_button-next",
    prevEl: "#reviews_button-prev"
  },
  scrollbar: {
    el: "#reviews_scrollbar",
    draggable: !0
  }
});

const reviewsSwiperEl = document.querySelector(".reviews_swiper");
if (reviewsSwiperEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? reviewsSwiper.autoplay.start() : reviewsSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(reviewsSwiperEl);

  const rect = reviewsSwiperEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    reviewsSwiper.autoplay.stop();
  }
}

const teamSwiperWide = new Swiper(".team_swiper-wide", {
  direction: "horizontal",
  watchSlidesProgress: !0,
  slidesPerView: 1,
  spaceBetween: 24,
  threshold: 20,
  centeredSlides: !1,
  speed: 400,
  autoplay: {
    delay: 4e3,
    disableOnInteraction: !1,
    pauseOnMouseEnter: !0
  },
  rewind: !0,
  mousewheel: {
    forceToAxis: !0,
    releaseOnEdges: !0
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    580: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  },
  navigation: {
    nextEl: "#team_swiper-wide_button-next",
    prevEl: "#team_swiper-wide_button-prev"
  },
  scrollbar: {
    el: "#team_swiper-wide_scrollbar",
    draggable: !0
  }
});

let teamSwiperWideEl = document.querySelector(".team_swiper-wide");
if (teamSwiperWideEl) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? teamSwiperWide.autoplay.start() : teamSwiperWide.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(teamSwiperWideEl);

  const rect = teamSwiperWideEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    teamSwiperWide.autoplay.stop();
  }
}
