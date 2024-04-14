import { getData } from "../../modules/helpers";
import { reload_abourCar, reload_cars } from "../../modules/ui";

let carId = location.search.split("=").at(-1);
let abputCarPlace = document.querySelector("main .top");
let similarPlace = document.querySelector(".car_bottom_bottom");
let similar_cars = [];

getData("/cars/" + carId).then((res) => {
  reload_abourCar(res.data.data, abputCarPlace);
  console.log(res.data.data);
  getData("/cars").then((element) => {
    element.data.data.forEach((el) => {
      if ((el.category.title = res.data.data.category.title)) {
        similar_cars.push(el);
        reload_cars(similar_cars.slice(0, 4), similarPlace);
      }
    });
  });
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