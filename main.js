/* ============================================================
   L+L Építőmester — interakciók
   ============================================================ */
(() => {
  "use strict";

  /* ---------- SVG ikonok ---------- */
  const ICONS = {
    phone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>',
    arrow: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    check: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 12.5 5 5L20 6.5"/></svg>',
    plus: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    zoom: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>',
    lr: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/></svg>',
    pin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    badge: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/></svg>',
    target: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
    handshake: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a2 2 0 0 0-2.8 0l-.8.8a2 2 0 0 1-2.8 0Z"/><path d="m3 10 4-4 4 1 3-1 4 4"/><path d="M3 10v5l3 3"/><path d="M21 10v5l-3 3"/></svg>',
    layers: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17 9 5 9-5" opacity="0.45"/></svg>',
    bolt: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
    grid: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>',
    tile: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.4"/><rect x="13" y="3" width="8" height="8" rx="1.4"/><rect x="3" y="13" width="8" height="8" rx="1.4"/><rect x="13" y="13" width="8" height="8" rx="4"/></svg>',
    paver: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M2 9h7v6H2zM9 6h6v9H9zM15 9h7v6h-7z"/><path d="M2 19h20" stroke-linecap="round"/></svg>',
    roof: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 12 10-8 10 8"/><path d="M5 10.5V20h14v-9.5"/><path d="M2 12h20" opacity="0.4"/></svg>',
    masonry: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="1.5"/><path d="M2 9.3h20M2 14.6h20M7 4v5.3M14 4v5.3M10.5 9.3v5.3M17.5 9.3v5.3M7 14.6V20M14 14.6V20"/></svg>',
    paint: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="7" rx="1.5"/><path d="M7 10v3a2 2 0 0 0 2 2h4"/><rect x="11" y="15" width="4" height="7" rx="1"/></svg>',
    drywall: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 9h18M3 15h18M12 3v18"/></svg>',
    insulation: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c3.5 3.4 6 6.2 6 9.5A6 6 0 0 1 6 12.5C6 9.2 8.5 6.4 12 3Z"/><path d="M9 14.5a3 3 0 0 0 6 0"/></svg>',
    wall: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V10l6-4 6 4v11"/><path d="M15 21V8l6 3v10"/><path d="M2 21h20"/><path d="M9 21v-4h0" opacity="0.6"/></svg>',
    "arrow-up": '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></svg>'
  };

  const hydrateIcons = (root) => {
    (root || document).querySelectorAll("[data-icon]").forEach((el) => {
      const key = el.getAttribute("data-icon");
      if (key === "check") return; /* a pipát a CSS maszk ikon adja */
      if (ICONS[key] && !el.querySelector("svg.icon")) el.insertAdjacentHTML("afterbegin", ICONS[key]);
    });
  };
  hydrateIcons(document);

  /* ---------- Évszám a lábléchez ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Sticky header ---------- */
  const header = document.getElementById("header");
  const onScrollHeader = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Mobil menü ---------- */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const closeNav = () => {
    if (!burger || !nav) return;
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.body.classList.remove("nav-open");
  };
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      document.body.classList.toggle("nav-open", open);
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) closeNav(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  }

  /* ---------- Reveal animációk ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => ro.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Sticky mobil CTA + vissza a tetejére + olvasásjelző ---------- */
  const mobcta = document.getElementById("mobcta");
  const totop = document.getElementById("totop");
  const progressBar = document.getElementById("progressBar");
  const onScrollUi = () => {
    const y = window.scrollY;
    if (mobcta) mobcta.classList.toggle("is-visible", y > 480);
    if (totop) totop.classList.toggle("is-visible", y > 900);
    if (progressBar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
    }
  };
  onScrollUi();
  window.addEventListener("scroll", onScrollUi, { passive: true });
  totop && totop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Scrollspy a navigációban ---------- */
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const spyTargets = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (spyTargets.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    spyTargets.forEach((t) => spy.observe(t));
  }

  /* ---------- Referenciaszűrő ---------- */
  const filterBtns = document.querySelectorAll(".filter__btn");
  const refCards = document.querySelectorAll("#refGrid .ref-card");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const f = btn.getAttribute("data-filter");
      refCards.forEach((card) => {
        const show = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("is-hidden", !show);
        if (show) { card.classList.add("in"); }
      });
    });
  });

  /* ---------- Before / After csúszka ---------- */
  document.querySelectorAll("[data-ba]").forEach((ba) => {
    const after = ba.querySelector(".ba__pane--after");
    const handle = ba.querySelector(".ba__handle");
    if (!after || !handle) return;
    let pos = 50;
    const setPos = (p) => {
      pos = Math.min(96, Math.max(4, p));
      after.style.clipPath = "inset(0 0 0 " + pos + "%)";
      handle.style.left = pos + "%";
      handle.setAttribute("aria-valuenow", String(Math.round(pos)));
    };
    const fromEvent = (e) => {
      const r = ba.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(((clientX - r.left) / r.width) * 100);
    };
    let dragging = false;
    ba.addEventListener("pointerdown", (e) => { dragging = true; ba.setPointerCapture && ba.setPointerCapture(e.pointerId); fromEvent(e); });
    ba.addEventListener("pointermove", (e) => { if (dragging) fromEvent(e); });
    ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => ba.addEventListener(ev, () => { dragging = false; }));
    handle.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { setPos(pos - 4); e.preventDefault(); }
      if (e.key === "ArrowRight") { setPos(pos + 4); e.preventDefault(); }
    });
    setPos(50);
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const stage = document.getElementById("lightboxStage");
  const captionEl = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  const openLightbox = (media) => {
    if (!lightbox || !stage) return;
    const clone = media.cloneNode(true);
    clone.removeAttribute("data-lightbox");
    clone.classList.add("media-clone");
    clone.style.cursor = "default";
    clone.querySelectorAll(".media__zoom").forEach((z) => z.remove());
    stage.innerHTML = "";
    stage.appendChild(clone);
    const t = media.querySelector("h3");
    if (captionEl) captionEl.textContent = t ? t.textContent : "";
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    document.body.style.overflow = "hidden";
    closeBtn && closeBtn.focus();
  };
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => { lightbox.hidden = true; if (stage) stage.innerHTML = ""; }, 320);
  };
  document.querySelectorAll(".media[data-lightbox]").forEach((m) => {
    m.addEventListener("click", () => openLightbox(m));
  });
  if (lightbox) {
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });
    closeBtn && closeBtn.addEventListener("click", closeLightbox);
  }

  /* ---------- FAQ — mindig egy nyitva, animált nyitással ---------- */
  const faqItems = [...document.querySelectorAll(".faq-item")];
  faqItems.forEach((item) => {
    const body = item.querySelector(".faq-item__body");
    if (body) {
      body.style.overflow = "hidden";
      if (item.open) body.style.height = "auto";
    }
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((o) => {
          if (o !== item && o.open) {
            const b = o.querySelector(".faq-item__body");
            if (b) {
              b.style.height = b.scrollHeight + "px";
              requestAnimationFrame(() => { b.style.height = "0px"; });
              setTimeout(() => { o.open = false; b.style.height = ""; }, 320);
            } else { o.open = false; }
          }
        });
        if (body) {
          body.style.height = body.scrollHeight + "px";
          requestAnimationFrame(() => { body.style.height = "auto"; });
        }
      }
    });
  });

  /* ---------- Szolgáltatáskártyák sorszámozása ---------- */
  document.querySelectorAll(".grid--4 .srv-card").forEach((card, i) => {
    const n = document.createElement("span");
    n.className = "srv-card__num";
    n.setAttribute("aria-hidden", "true");
    n.textContent = String(i + 1).padStart(2, "0");
    card.appendChild(n);
  });

  /* ---------- Szűrő: ARIA állapotok ---------- */
  filterBtns.forEach((btn, i) => {
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", btn.classList.contains("is-active") ? "true" : "false");
    btn.setAttribute("tabindex", btn.classList.contains("is-active") ? "0" : "-1");
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.setAttribute("aria-selected", "false");
        b.setAttribute("tabindex", "-1");
      });
      btn.setAttribute("aria-selected", "true");
      btn.setAttribute("tabindex", "0");
    });
    void i;
  });

  /* ---------- Before/After billentyűzet-összpontosítás ---------- */
  document.querySelectorAll("[data-ba]").forEach((ba) => {
    ba.setAttribute("tabindex", "0");
    ba.addEventListener("keydown", (e) => {
      const handle = ba.querySelector(".ba__handle");
      if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && document.activeElement !== handle) {
        handle && handle.focus();
      }
    });
  });

  /* ---------- Űrlap: mailto-előkészítés ---------- */
  const form = document.getElementById("offerForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("fName");
      const reply = document.getElementById("fReply");
      const topic = document.getElementById("fTopic");
      const msg = document.getElementById("fMsg");
      let ok = true;
      [[name, (v) => v.trim().length >= 2], [reply, (v) => v.trim().length >= 5]].forEach(([el, test]) => {
        if (!el) return;
        const field = el.closest(".field");
        const valid = test(el.value);
        field && field.classList.toggle("is-invalid", !valid);
        if (!valid) ok = false;
      });
      if (!ok) return;

      const subject = "Ajánlatkérés — " + (topic ? topic.value : "Építőipari munka") + " (L+L Építőmester)";
      const body =
        "Név: " + name.value + "\n" +
        "Elérhetőség: " + reply.value + "\n" +
        "Munka típusa: " + (topic ? topic.value : "-") + "\n\n" +
        "Üzenet:\n" + (msg ? msg.value : "-") + "\n";
      const mailto = "mailto:labanc.d.l@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      const success = document.getElementById("formSuccess");
      if (success) success.hidden = false;
      window.location.href = mailto;
    });
    ["fName", "fReply"].forEach((id) => {
      const el = document.getElementById(id);
      el && el.addEventListener("input", () => { const f = el.closest(".field"); f && f.classList.remove("is-invalid"); });
    });
  }
})();
