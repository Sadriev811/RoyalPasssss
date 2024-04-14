import axios from "axios"
import { getData } from "../../modules/helpers"
import { reload_cars } from "../../modules/ui"

let burger_bg = document.querySelector('.burger_bg')
let burger_menu = document.querySelector('.burger_menu')
let burger = document.querySelector('.burger')
let categories = []
// burger menu
burger_bg.onclick = () => {
  burger_menu.classList.toggle('active')
  burger.classList.toggle('burger_active')
  document.body.classList.toggle('over')
}



let range = document.querySelector('.range')
let price_cars = document.querySelector('.price_cars')
let select_catalog = document.querySelector('.select_catalog')
let catalog_year = document.querySelectorAll('.catalog_year')
let catalog_mile = document.querySelector('.select_mile')
let chosedPrice = 25000
let requestCars = document.querySelector('.catalog_filter_left')
let howMany = document.querySelector('.HowMany')


range.addEventListener('input', () => {
  console.log(range.value);
  chosedPrice = range.value
  price_cars.innerHTML = `${range.value}$`
})

price_cars.innerHTML = `${range.value}$`
console.log(range.value);
let uniqueCategories = []
let uniqueYears = []
getData('/cars').then(res => {
  howMany.innerHTML = res.data.data.length
  const categories = res.data.data.map(el => el.category.title);
  const years = res.data.data.map(el => el.year);
  uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index);
  uniqueYears = years.filter((value, index, self) => self.indexOf(value) === index);

  console.log(uniqueCategories);
  console.log(uniqueYears);


  for (let item of uniqueCategories) {
    let option = document.createElement('option')
    option.value = item
    option.innerHTML = item
    select_catalog.append(option)
  }

  for (let item of uniqueYears) {
    for (let catYera of catalog_year) {
      let option = document.createElement('option')
      option.value = item
      option.innerHTML = item
      catYera.append(option)

    }
  }
  res.data.data.forEach(el => {
    let option = document.createElement('option')
    option.value = el.mileage
    option.innerHTML = el.mileage
    catalog_mile.append(option)
  })
});

let btns_filter = document.getElementById('filter')
let btns_reset = document.querySelector('#reset')
let chosedCArs = []
btns_filter.onclick = () => {
  getData('/cars').then(res => {
    res.data.data.forEach(el => {
      if (el.price < chosedPrice) {
        chosedCArs.push(el)
        reload_cars(chosedCArs.slice(0, 8), requestCars)
      }
    })
  })
}

