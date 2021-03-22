/* eslint-disable no-empty */
///////////////////////////Globals/////////////////////////////////
let productsArray = [];
let to_cart = [];
let middle_section = document.getElementById('middle-section');
let right_section = document.getElementById('right-section');
let Checkout_btn_div = document.getElementById('Checkout-btn-div');
let filter_form_reset = document.getElementById('filter-form-reset');
Checkout_btn_div.innerHTML = '';
let filter_form = document.getElementById('filter-form');

///////////////////////////Constructer/////////////////////////////////
function Product(title, description, price, image_path, type,goal) {
  this.title = title;
  this.description= description;
  this.price= price;
  this.image_path = `Image/products/${image_path}`;
  this.type = type;
  this.goal = goal;
  productsArray.push(this);
}

///////////////////////////Constructer prototypes methods/////////////////////////////////
Product.prototype.render = function () {
  this.show_product(this.type);

};
Product.prototype.show_product = function (choice) {

  let Supplemnts_products_container = document.getElementById(`${choice}-products-container`);
  let Supplemnts_product = document.createElement('div');
  Supplemnts_product.className = `${choice}-product ${this.goal}`;
  Supplemnts_products_container.appendChild(Supplemnts_product);

  ///////// img

  let Supplemnts_product_img = document.createElement('div');
  Supplemnts_product_img.className = `${choice}-product-img`;
  Supplemnts_product.appendChild(Supplemnts_product_img);
  let Supplemnts_product_img_img = document.createElement('img');
  Supplemnts_product_img_img.src = this.image_path;
  Supplemnts_product_img.appendChild(Supplemnts_product_img_img);


  ///////// info

  let Supplemnts_product_info = document.createElement('div');
  Supplemnts_product_info.className = `${choice}-product-info`;
  let Supplemnts_product_info_h2 = document.createElement('h2');
  Supplemnts_product_info_h2.className = `${choice}-product-info-heading`;
  Supplemnts_product_info_h2.innerHTML = this.title;
  Supplemnts_product_info.appendChild(Supplemnts_product_info_h2);
  let Supplemnts_product_info_description = document.createElement('p');
  Supplemnts_product_info_description.className = `${choice}-product-info-description`;
  Supplemnts_product_info_description.innerHTML = this.description;
  Supplemnts_product_info.appendChild(Supplemnts_product_info_description);
  let Supplemnts_product_info_price = document.createElement('p');
  Supplemnts_product_info_price.className = `${choice}-product-info-price`;
  Supplemnts_product_info_price.innerHTML = this.price;
  let test = document.createElement('p');
  test.textContent = this.goal;
  Supplemnts_product_info.appendChild(test);
  Supplemnts_product_info.appendChild(Supplemnts_product_info_price);
  Supplemnts_product.appendChild(Supplemnts_product_info);

  ///////// btn

  let Supplemnts_product_button_div = document.createElement('div');
  Supplemnts_product_button_div.className = `${choice}-product-button-div`;
  let Supplemnts_product_button = document.createElement('button');
  Supplemnts_product_button.className = `${choice}-product-button`;
  Supplemnts_product_button.type = 'submit';
  Supplemnts_product_button.value = JSON.stringify(this);
  Supplemnts_product_button.name = this.title;
  Supplemnts_product_button.innerHTML = 'Add to Cart';
  Supplemnts_product_button.id = `${choice}-product-button`;
  Supplemnts_product_button_div.appendChild(Supplemnts_product_button);
  Supplemnts_product.appendChild(Supplemnts_product_button_div);
  console.log(Supplemnts_product_button.id);
};
Product.prototype.to_localstorage = function () {

};


///////////////////////////Event listners/////////////////////////////////
middle_section.addEventListener('click', btnHandler);
filter_form.addEventListener('submit', SEoptionHandler);
filter_form_reset.addEventListener('click', FFRoptionHandler);

///////////////////////////Event listners functions/////////////////////////////////
function btnHandler(event) {
  if (event.target.id === 'Supplemnts-product-button' || event.target.id === 'Equipments-product-button') {
    to_cart.push(JSON.parse(event.target.value));
    localStorage.setItem('cart', JSON.stringify(to_cart));
    let right_section_div = document.createElement('div');
    right_section_div.className = 'right-section-div';
    right_section.appendChild(right_section_div);
    let right_section_p = document.createElement('p');
    right_section_p.innerHTML = 'You have added <span style="color:#23689b;"> ' + event.target.name + ' </span> To the Cart, Succesfully.';
    right_section_div.appendChild(right_section_p);
    if (Checkout_btn_div.innerHTML === '') {
      console.log('test');
      let a = document.createElement('a');
      let btn = document.createElement('button');
      btn.className = 'Checkout-btn';
      btn.innerText = 'Checkout';
      a.href = 'cart.html';
      a.appendChild(btn);
      Checkout_btn_div.appendChild(a);
    }
  }
}

function SEoptionHandler(event) {
  // console.log('sds')
  event.preventDefault();
  if (event.target.Supplemnts_or_Equipments.value === 'Supplemnts' && event.target.weight_loss_maintain_gain.value === 'Weight-loss' ) {
    filter_choices('block', 'none', 'block', 'none', 'none');
  } else if (event.target.Supplemnts_or_Equipments.value === 'Supplemnts' && event.target.weight_loss_maintain_gain.value === 'Gain-muscle') {
    filter_choices('block', 'none', 'none', 'block', 'none');
  } else if (event.target.Supplemnts_or_Equipments.value === 'Supplemnts' && event.target.weight_loss_maintain_gain.value === 'Maintain-weight') {
    filter_choices('block', 'none', 'none', 'none', 'block');
  } else if (event.target.Supplemnts_or_Equipments.value === 'Equipments' && event.target.weight_loss_maintain_gain.value === 'Weight-loss') {
    filter_choices('none', 'block', 'block', 'none', 'none');
  } else if (event.target.Supplemnts_or_Equipments.value === 'Equipments' && event.target.weight_loss_maintain_gain.value === 'Gain-muscle') {
    filter_choices('none', 'block', 'none', 'block', 'none');
  } else if (event.target.Supplemnts_or_Equipments.value === 'Equipments' && event.target.weight_loss_maintain_gain.value === 'Maintain-weight') {
    filter_choices('none', 'block', 'none', 'none', 'block');
  } else {
    //   console.log('sds')
    document.getElementById('Equipments-products-container').style.display = 'block';
    document.getElementById('Supplemnts-products-container').style.display = 'block';
  }
}

function FFRoptionHandler(event) {
  if (event.target.id === 'filter-form-reset') {
    console.log('sdfsdfsdf');
    filter_choices('block', 'block', 'block', 'block', 'block');
  }
}


///////////////////////////Helper functions/////////////////////////////////
function weight_loss_opt_f(display) {
  let weight_loss_opt = document.getElementsByClassName('Weight-loss');
  for (let c = 0; c < weight_loss_opt.length; c++) {
    weight_loss_opt[c].style.display = display;
  }
}
function weight_gain_opt_f(display) {
  let weight_gain_opt_f = document.getElementsByClassName('Gain-muscle');
  for (let c = 0; c < weight_gain_opt_f.length; c++) {
    weight_gain_opt_f[c].style.display = display;
  }
}
function weight_maintain_opt_f(display) {
  let weight_maintain_opt_f = document.getElementsByClassName('Maintain-weight');
  for (let c = 0; c < weight_maintain_opt_f.length; c++) {
    weight_maintain_opt_f[c].style.display = display;
  }
}
function filter_choices(c1, c2, c3, c4, c5) {
  document.getElementById('Supplemnts-products-container').style.display = c1;
  document.getElementById('Equipments-products-container').style.display = c2;
  weight_loss_opt_f(c3);
  weight_gain_opt_f(c4);
  weight_maintain_opt_f(c5);
}


///////////////////////////Creating objects/////////////////////////////////
let test1 = new Product(
  'ultimate weight-gain',
  'Our gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
  '168 AED',
  'CLA-Capsules.jpg',
  'Supplemnts','Maintain-weight');
let test3 = new Product(
  'ultimate weight-gain',
  'Our gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
  '168 AED',
  'CLA-Capsules.jpg',
  'Supplemnts','Gain-muscle');
let test2 = new Product(
  'ultimate weight-gain',
  'Our gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
  '168 AED',
  'CLA-Capsules.jpg',
  'Equipments','Weight-loss');


///////////////////////////Calling objects/////////////////////////////////
test1.render();
test2.render();
test3.render();


