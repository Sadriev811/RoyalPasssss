import { getData, getDataEmail, postDataEmail } from "./modules/helpers";
import { reload_cars } from "./modules/ui";

//swiper
new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

let categories_button = document.querySelectorAll(".swiper_top_left a");
let clicked_button = 0;
categories_button.forEach((a, idx) => {
  categories_button[0].classList.add("active");
  a.onclick = () => {
    categories_button[clicked_button].classList.remove("active");
    categories_button[idx].classList.add("active");

    clicked_button = idx;
  };
});

let search_input = document.querySelector(".swiper_top_right div input");
let search_btn = document.querySelector(".swiper_top_right div .search");

search_btn.onclick = () => {
  if (search_input.value != 0) {
    console.log(search_input.value);
  } else {
    alert("fuel input");
  }
};

let signUpModal = document.querySelector(".secReg");
let signUpForm = document.forms.signUp;
let signUpBtn = document.querySelector(".btn_sign");
let signUpExitBtns = document.querySelectorAll(
  ".secReg .modal_content .modal_content_top img"
);

signUpForm.onsubmit = (e) => {
  e.preventDefault();

  let user = {};

  let fm = new FormData(signUpForm);
  fm.forEach((value, key) => (user[key] = value));

  getDataEmail("/users?email=" + user.email).then((res) => {
    if (res.status !== 200 && res.status !== 201) return;
    if (res.data.length > 0) {
      alert("account already taken!");
      return;
    }

    postDataEmail("/users", user).then((res) => {
      if (res.status !== 200 && res.status !== 201) return;
      signUpModal.classList.remove("show");
      signUpForm.reset();
    });
  });
};

signUpModal.classList.remove("show");
signUpBtn.onclick = () => {
  signUpModal.classList.add("show");
};
signUpExitBtns.forEach((btn) => {
  btn.onclick = () => {
    signUpModal.classList.remove("show");
  };
});

//catalog open btns
let catalogOpenBtns = document.querySelectorAll("#catalog_btn");
catalogOpenBtns.forEach((btn) => {
  btn.onclick = () => {
    location.assign("/pages/Catalog/");
  };
});

//reload cars
let sec3 = document.querySelector(".sec3 .right");

getData("/cars").then((res) => {
  console.log(res);
  if (res.status === 200 || res.status === 201) {
    reload_cars(res.data.data.slice(0, 3), sec3);

    console.log(res.data.data);
  }
});

new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

let burger_menu = document.querySelector('.burger_menu')
let burger = document.querySelector('.burger')
let burger_bg = document.querySelector('.burger_bg')

// burger menu
burger_bg.onclick = () => {
  burger_menu.classList.toggle('active')
  burger.classList.toggle('burger_active')
  document.body.classList.toggle('over')
}


// amir

let doc = document
let accordeon = doc.querySelector('.questions__accordeon')
let accordeonText = doc.querySelector('.questions__accordeon-text')
let accordeonArrow = doc.querySelector('.accordeon__arrow')

accordeon.onclick = () => {
  accordeonText.classList.toggle('accordeon__active')
  accordeonArrow.classList.toggle('accordeon__arrow-active')
}
