let burger = document.querySelector(".container .nav .burger");
let navCollapse = document.querySelector(".container .nav .nav-collapse");
let nav = document.querySelector(".nav");
let navBefore = window.getComputedStyle(nav, "::before");

// adding function and event listener to the menu collapse
burger.addEventListener("click", function (e) {
  menuCollapseShow();
});

// make the menu to appear on demand
function menuCollapseShow() {
  if (window.getComputedStyle(navCollapse).display === "none") {
    navCollapse.style.display = "flex";
    nav.style.setProperty("--dn", "block");
    burger.innerHTML = `<img src="images/icon-close-menu.svg" class="menu-burger" alt="menu">`;
  } else {
    navCollapse.style.display = "none";
    nav.style.setProperty("--dn", "none");
    burger.innerHTML = `<img src="images/icon-menu.svg" class="menu-burger" alt="menu">`;
  }
}

// select sub-menu

let lists = document.querySelectorAll(".list");
let listSpan = document.querySelectorAll(".list span");

document.addEventListener("click", function (e) {
  if (e.target.firstChild.textContent.toLowerCase() !== "features") {
    lists[0].classList.remove("clicked");
    lists[0].lastElementChild.classList.remove("active");
  }
  if (e.target.firstChild.textContent.toLowerCase() !== "company") {
    lists[1].classList.remove("clicked");
    lists[1].lastElementChild.classList.remove("active");
  }
});

lists.forEach((list) => {
  list.addEventListener("click", function () {
    list.classList.toggle("clicked");
    list.lastElementChild.classList.toggle("active");
  });
});

// select the hero photo and change it based on the width of the window

let heroHolder = document.querySelector(".hero-holder");

window.onresize = () => {
  console.log(document.body.offsetWidth);
  if (document.body.offsetWidth > 895) {
    navCollapse.style.display = "grid";
  } else {
    menuCollapseShow();
  }
  enableDisablePhoneMode();
};

window.onload = () => {
  enableDisablePhoneMode();
};

// enable or disable phone photo version
function enableDisablePhoneMode() {
  if (document.body.offsetWidth <= 995) {
    heroHolder.innerHTML = `<img src="images/image-hero-mobile.png" class="hero mobile">`;
  } else {
    heroHolder.innerHTML = `<img src="images/image-hero-desktop.png" class="hero desktop">`;
  }
}
