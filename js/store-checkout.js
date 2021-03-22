/* eslint-disable no-unused-vars */
'use strict';
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
function Product(title, description, price, image_path, type, goal) {
  this.title = title;
  this.description = description;
  this.price = price;
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


