// BURGER MENU
const icon = document.querySelector(".header__icon");

// NAVIGATION
const nav = document.querySelector(".nav");

// MODAL
const modal = document.querySelector(".modal");

const app = () => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");

      nav.classList.remove("show");
      modal.classList.remove("open");
      nav.classList.add("hide");
      modal.classList.add("close");
    } else {
      icon.classList.add("active");

      nav.classList.remove("hide");
      modal.classList.remove("close");
      nav.classList.add("show");
      modal.classList.add("open");
    }

    modal.addEventListener("click", () => {
      if (modal.classList.contains("open")) {
        nav.classList.remove("show");
        modal.classList.remove("open");
        nav.classList.add("hide");
        modal.classList.add("close");
        icon.classList.remove("active");
      }
    });
  });

  // RESIZE ANIMATION STOPPER NAV MENU
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      icon.classList.contains("active") && icon.classList.remove("active");
      nav.classList.contains("show") && nav.classList.remove("show");
      nav.classList.contains("hide") && nav.classList.remove("hide");
      modal.classList.contains("open") && modal.classList.remove("open");
      modal.classList.contains("close") && modal.classList.remove("close");
    }
  });
};

app();
