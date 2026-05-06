// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.9)";
    navbar.style.padding = "8px 20px";
  } else {
    navbar.style.background = "rgba(0,0,0,0.6)";
    navbar.style.padding = "16px 20px";
  }
});


// ===============================
// SMOOTH SCROLL NAV LINKS
// ===============================
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// CARD CLICK ANIMATION
// ===============================
document.querySelectorAll(".restaurant-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";
    
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 150);
  });
});


// ===============================
// LIVE SEARCH FILTER
// ===============================
const searchInput = document.querySelector(".hero input");
const cards = document.querySelectorAll(".restaurant-card");

if(searchInput){
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll("section, .restaurant-card");

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// TYPING EFFECT HERO TEXT
// ===============================
const heroHeading = document.querySelector(".hero h1");

if(heroHeading){
  const text = "Discover the best food & drinks";
  let index = 0;

  heroHeading.innerHTML = "";

  function typeEffect(){
    if(index < text.length){
      heroHeading.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();
}