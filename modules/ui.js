
export function reload_cars(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    let block = document.createElement("div");
    let block_top = document.createElement("img");
    let block_bottom = document.createElement("div");
    let block_bottom_top = document.createElement("div");
    let block_bottom_top_1 = document.createElement("div");
    let block_bottom_top_1_img = document.createElement("img");
    let block_bottom_top_1_p = document.createElement("p");
    let block_bottom_top_2 = document.createElement("div");
    let block_bottom_top_2_img = document.createElement("img");
    let block_bottom_top_2_p = document.createElement("p");
    let model = document.createElement("h3");
    let title = document.createElement("p");
    let price = document.createElement("h4");
    let block_bottom_bottom = document.createElement("div");
    let block_bottom_bottom_btn_1 = document.createElement("button");
    let block_bottom_bottom_btn_2 = document.createElement("button");

    block.classList.add("block");
    block_top.classList.add("block_top");

    block_bottom.classList.add("block_bottom");
    block_bottom_top.classList.add("block_bottom_top");
    model.classList.add("model");
    title.classList.add("title");
    price.classList.add("price");
    block_bottom_bottom.classList.add("block_bottom_bottom");

    block_top.src = item.images[0].url;
    block_bottom_top_1_img.src = "/public/img/speedometer.png";
    block_bottom_top_1_p.innerHTML = item.speed + " максималка";
    block_bottom_top_2_img.src = "/public/img/fuel-pump.png";
    block_bottom_top_2_p.innerHTML = item.gas + " на 100 км";
    item.model.lenght <= 10
      ? (model.innerHTML = item.model)
      : (model.innerHTML = item.model.slice(0, 10) + "...");
    title.innerHTML = item.category.title;
    price.innerHTML = item.price + "р/месяц";
    block_bottom_bottom_btn_1.innerHTML = "Арендовать";
    block_bottom_bottom_btn_2.innerHTML = "Подробнее";

    place.append(block);
    block.append(block_top, block_bottom);
    block_bottom.append(
      block_bottom_top,
      model,
      title,
      price,
      block_bottom_bottom
    );
    block_bottom_top.append(block_bottom_top_1, block_bottom_top_2);
    block_bottom_top_1.append(block_bottom_top_1_img, block_bottom_top_1_p);
    block_bottom_top_2.append(block_bottom_top_2_img, block_bottom_top_2_p);
    block_bottom_bottom.append(
      block_bottom_bottom_btn_1,
      block_bottom_bottom_btn_2
    );
    block.onclick = () => {
      location.assign(`/pages/aboutCar/?car_id=${item.id}`);
    };
  }
}
export function reload_abourCar(obj, place) {
  let top = document.createElement("div");
  let p = document.createElement("p");
  let h4 = document.createElement("h4");
  let bottom = document.createElement("div");
  let bottom_left = document.createElement("img");
  let bottom_right = document.createElement("div");
  let bottom_right_title = document.createElement("h2");
  let bottom_right_model = document.createElement("h5");
  let oil_block = document.createElement("div");
  let oil_block_left = document.createElement("div");
  let oil_block_left_img = document.createElement("img");
  let oil_block_left_p = document.createElement("p");
  let oil_block_right = document.createElement("div");
  let oil_block_right_img = document.createElement("img");
  let oil_block_right_p = document.createElement("p");
  let car_decription = document.createElement("p");
  let price = document.createElement("h6");
  let btn = document.createElement("button");

  top.classList.add("car_top");
  bottom.classList.add("car_bottom");
  bottom_right.classList.add("car_bottom_right");
  oil_block.classList.add("oil_block");
  car_decription.classList.add("car_decription");
  price.classList.add("price");
  btn.classList.add("car_btn");
  bottom_left.classList.add("car_main_img");

  p.innerHTML =
    "Главная > Автомобиль в лизинг > Легковые автомобили > " + obj.model;
  h4.innerHTML = obj.model;
  bottom_left.src = obj.images[0].url;
  bottom_right_title.innerHTML = obj.model;
  bottom_right_model.innerHTML = obj.category.title;
  oil_block_left_p.innerHTML = obj.speed + " максималка";
  oil_block_right_p.innerHTML = obj.gas + " на 100 км";
  oil_block_left_img.src = "/public/img/speedometer.png";
  oil_block_right_img.src = "/public/img/fuel-pump.png";
  car_decription.innerHTML = obj.description;
  price.innerHTML = "Лизинг: <br>" + obj.price + "р/месяц";
  btn.innerHTML = "Оставить заявку";

  place.append(top, bottom);
  top.append(p, h4);
  bottom.append(bottom_left, bottom_right);
  bottom_right.append(
    bottom_right_title,
    bottom_right_model,
    oil_block,
    car_decription,
    price,
    btn
  );
  oil_block.append(oil_block_left, oil_block_right);  
  oil_block_left.append(oil_block_left_img, oil_block_left_p);
  oil_block_right.append(oil_block_right_img, oil_block_right_p);
}
let burger_bg = document.querySelector('.burger_bg')

// burger menu
burger_bg.onclick = () => {
  burger_menu.classList.toggle('active')
  burger.classList.toggle('burger_active')
  document.body.classList.toggle('over')
}
