/* app.js — small interactions (cursor spotlight, scroll-reveal, smooth scroll).
   Agents add as needed. */

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Cursor-follow spotlight — feeds CSS vars on .spotlight */
  const spotlight = document.querySelector(".spotlight");
  if (spotlight && !reduceMotion) {
    let raf = null;
    window.addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        spotlight.style.setProperty("--mx", e.clientX + "px");
        spotlight.style.setProperty("--my", e.clientY + "px");
        raf = null;
      });
    });
  }

  /* Scroll-reveal — lift elements in as they enter the viewport */
  const revealables = document.querySelectorAll(".reveal");
  if (revealables.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealables.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealables.forEach((el) => io.observe(el));
    }
  }
})();
