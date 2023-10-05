// Search Box
let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};

// Menu (responsive)
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};

// Sticky Navbar
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Active Navbar
const navLinkEls = document.querySelectorAll(".navbar a");
const windowsPathname = window.location.pathname;

navLinkEls.forEach((navLinkEls) => {
  if (navLinkEls.href.includes(windowsPathname)) {
    navLinkEls.classList.add("active");
  }
});

/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".navbar, .header-icon i, .logo img", {
  origin: "top",
});

ScrollReveal().reveal(".home-text a, .footer-box", {
  origin: "bottom",
});

ScrollReveal().reveal(".home-text h1, .home-text p, .about-gambar1, .about-text2, .btn-home, .heading, .customers-container", {
  origin: "left",
});

ScrollReveal().reveal(".products-container, .home-img img, .about-gambar2, .about-text1, .headings, .customers-containers", {
  origin: "right",
});
