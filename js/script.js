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
