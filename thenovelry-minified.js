(() => {
  const style = document.createElement("style");
  style.textContent = `
    .manual-scrollbar-drag {
      background: var(--swiper-scrollbar-drag-bg-color, rgba(0,0,0,0.5));
      border-radius: inherit;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transition: none !important;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
})();

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

  let dragEl = scrollbarEl.querySelector(".manual-scrollbar-drag");
  if (!dragEl) {
    dragEl = document.createElement("div");
    dragEl.className = "manual-scrollbar-drag";
    scrollbarEl.appendChild(dragEl);
  }

  scrollbarEl.style.position = "relative";
  scrollbarEl.style.overflow = "hidden";
  scrollbarEl.style.cursor = "pointer";

  dragEl.style.position = "absolute";
  dragEl.style.left = "0";
  dragEl.style.top = "0";
  dragEl.style.height = "100%";
  dragEl.style.willChange = "transform,width";
  dragEl.style.transition = "none";

  return dragEl;
}

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
  if (typeof rawTranslate === "number" && Number.isFinite(rawTranslate)) {
    const minT = swiper.minTranslate();
    const maxT = swiper.maxTranslate();
    const range = minT - maxT;
    progress = range !== 0 ? (minT - rawTranslate) / range : 0;
  } else {
    progress = swiper.progress;
  }

  if (!Number.isFinite(progress)) progress = 0;
  progress = Math.max(0, Math.min(1, progress));

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

  const update = () => syncManualScrollbar(swiper, scrollbarEl);
  const updateFromTranslate = (_swiper, translate) => syncManualScrollbar(swiper, scrollbarEl, translate);

  swiper.on("init", update);
  swiper.on("setTranslate", updateFromTranslate);
  swiper.on("sliderMove", updateFromTranslate);
  swiper.on("touchMove", updateFromTranslate);
  swiper.on("progress", update);
  swiper.on("slideChange", update);
  swiper.on("transitionEnd", update);
  swiper.on("touchEnd", update);
  swiper.on("resize", update);
  swiper.on("observerUpdate", update);
  swiper.on("breakpoint", update);
  swiper.on("update", update);

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
  const sliderEl = document.getElementById("editor-slider");
  const controlsEl = document.getElementById("editor-controls");
  const nextEl = document.getElementById("editor-slider_button-next");
  const prevEl = document.getElementById("editor-slider_button-prev");
  const scrollbarEl = document.querySelector(".editor-slider_scrollbar");

  if (!sliderEl) return;

  if (controlsEl) {
    sliderEl.appendChild(controlsEl);
  }

  const editorSwiper = new Swiper(sliderEl, {
    direction: "horizontal",
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 32,
    threshold: 20,
    centeredSlides: false,
    speed: 400,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    rewind: true,
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true
    },
    observer: true,
    observeParents: true,
    updateOnWindowResize: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      580: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 32 },
      1200: { slidesPerView: 3 }
    },
    navigation: nextEl && prevEl ? { nextEl, prevEl } : false,
    scrollbar: false
  });

  attachAutoplayObserver(editorSwiper, sliderEl);
  bindManualScrollbar(editorSwiper, scrollbarEl);
})();

/* =========================
   COACHES SLIDER
========================= */
(() => {
  const sliderEl = document.getElementById("coaches-slider");
  const controlsEl = document.getElementById("coaches-controls");
  const nextEl = document.getElementById("coaches-slider_button-next");
  const prevEl = document.getElementById("coaches-slider_button-prev");
  const scrollbarEl = document.querySelector(".coaches-slider_scrollbar");

  if (!sliderEl) return;

  if (controlsEl) {
    sliderEl.appendChild(controlsEl);
  }

  const coachesSwiper = new Swiper(sliderEl, {
    direction: "horizontal",
    watchSlidesProgress: true,
    slidesPerView: 1,
    spaceBetween: 32,
    threshold: 20,
    centeredSlides: false,
    speed: 400,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    rewind: true,
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true
    },
    observer: true,
    observeParents: true,
    updateOnWindowResize: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      580: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 32 },
      1200: { slidesPerView: 3 }
    },
    navigation: nextEl && prevEl ? { nextEl, prevEl } : false,
    scrollbar: false
  });

  attachAutoplayObserver(coachesSwiper, sliderEl);
  bindManualScrollbar(coachesSwiper, scrollbarEl);
})();
