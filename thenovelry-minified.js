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
    navigation: nextEl && prevEl ? {
      nextEl,
      prevEl
    } : !1,
    scrollbar: scrollbarEl ? {
      el: scrollbarEl,
      draggable: !0,
      hide: !1
    } : !1
  });

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? editorSwiper.autoplay.start() : editorSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(sliderEl);

  const rect = sliderEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    editorSwiper.autoplay.stop();
  }

  requestAnimationFrame(() => {
    editorSwiper.update();
    if (editorSwiper.scrollbar) {
      editorSwiper.scrollbar.updateSize();
      editorSwiper.scrollbar.setTranslate();
    }
  });
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
    navigation: nextEl && prevEl ? {
      nextEl,
      prevEl
    } : !1,
    scrollbar: scrollbarEl ? {
      el: scrollbarEl,
      draggable: !0,
      hide: !1
    } : !1
  });

  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? coachesSwiper.autoplay.start() : coachesSwiper.autoplay.stop();
    });
  }, { threshold: 0.3 }).observe(sliderEl);

  const rect = sliderEl.getBoundingClientRect();
  if (!(rect.top < 0.7 * window.innerHeight && rect.bottom > 0.3 * window.innerHeight)) {
    coachesSwiper.autoplay.stop();
  }

  requestAnimationFrame(() => {
    coachesSwiper.update();
    if (coachesSwiper.scrollbar) {
      coachesSwiper.scrollbar.updateSize();
      coachesSwiper.scrollbar.setTranslate();
    }
  });
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
