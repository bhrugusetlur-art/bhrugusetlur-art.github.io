document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const yearNode = document.querySelector("#current-year");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealNodes = document.querySelectorAll(".reveal");
if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("in-view"));
}

// Binary counter on the portrait card's LED strip — a nod to the
// register debug LEDs on the CPU project's Basys 3 board.
const leds = document.querySelectorAll(".led");
if (leds.length) {
  const show = (value) => {
    leds.forEach((led, i) => {
      led.classList.toggle("on", Boolean((value >> (leds.length - 1 - i)) & 1));
    });
  };
  if (reduceMotion) {
    show(0x0d);
  } else {
    let count = 0;
    show(count);
    setInterval(() => {
      count = (count + 1) & 0xff;
      show(count);
    }, 700);
  }
}
