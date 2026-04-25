function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("menu-overlay");
  const btn = document.getElementById("ham-btn");
  const isOpen = menu.classList.contains("open");
  if (isOpen) {
    menu.classList.remove("open");
    overlay.classList.remove("open");
    btn.classList.remove("ham-open");
    document.body.style.overflow = "";
  } else {
    menu.classList.add("open");
    overlay.classList.add("open");
    btn.classList.add("ham-open");
    document.body.style.overflow = "hidden";
  }
}
function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("menu-overlay").classList.remove("open");
  document.getElementById("ham-btn").classList.remove("ham-open");
  document.body.style.overflow = "";
}

const revealEls = document.querySelectorAll(".srv-reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

// Scroll reveal
const whyRevealEls = document.querySelectorAll(".why-reveal");
const whyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        whyObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
whyRevealEls.forEach((el) => whyObserver.observe(el));

// Scroll reveal for process section
const processRevealEls = document.querySelectorAll(".process-reveal");
const processObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        processObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
processRevealEls.forEach((el) => processObserver.observe(el));

const header = document.getElementById("header");

window.onscroll = () => {
  const scrolled = window.scrollY > 0;

  header.classList.toggle("fixed", scrolled);
  header.classList.toggle("top-0", scrolled);
  header.classList.toggle("shadow", scrolled);
  header.classList.toggle("relative", !scrolled);
};

const aboutRevealEls = document.querySelectorAll(".about-reveal");
const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        aboutObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
aboutRevealEls.forEach((el) => aboutObserver.observe(el));
