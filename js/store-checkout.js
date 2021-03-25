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
  this.pro_quantity = 0;
  this.render();
  productsArray.push(this);
}

///////////////////////////Constructer prototypes methods/////////////////////////////////
Product.prototype.render = function () {

  let Supplemnts_products_container = document.getElementById(`${this.type}-products-container`);
  let Supplemnts_product = document.createElement('div');
  Supplemnts_product.className = `${this.type}-product ${this.goal}`;
  Supplemnts_products_container.appendChild(Supplemnts_product);

  ///////// img

  let Supplemnts_product_img = document.createElement('div');
  Supplemnts_product_img.className = `${this.type}-product-img`;
  Supplemnts_product.appendChild(Supplemnts_product_img);
  let Supplemnts_product_img_img = document.createElement('img');
  Supplemnts_product_img_img.src = this.image_path;
  Supplemnts_product_img.appendChild(Supplemnts_product_img_img);


  ///////// info

  let Supplemnts_product_info = document.createElement('div');
  Supplemnts_product_info.className = `${this.type}-product-info`;
  let Supplemnts_product_info_h2 = document.createElement('h2');
  Supplemnts_product_info_h2.className = `${this.type}-product-info-heading`;
  Supplemnts_product_info_h2.innerHTML = this.title;
  Supplemnts_product_info.appendChild(Supplemnts_product_info_h2);
  let Supplemnts_product_info_description = document.createElement('p');
  Supplemnts_product_info_description.className = `${this.type}-product-info-description`;
  Supplemnts_product_info_description.innerHTML = this.description;
  Supplemnts_product_info.appendChild(Supplemnts_product_info_description);
  let Supplemnts_product_info_price = document.createElement('p');
  Supplemnts_product_info_price.className = `${this.type}-product-info-price`;
  Supplemnts_product_info_price.innerHTML = this.price;
  let test = document.createElement('p');
  test.textContent = this.goal;
  Supplemnts_product_info.appendChild(test);
  Supplemnts_product_info.appendChild(Supplemnts_product_info_price);
  Supplemnts_product.appendChild(Supplemnts_product_info);

  ///////// btn

  // let Supplemnts_product_button_div = document.createElement('div');
  // Supplemnts_product_button_div.className = `${this.type}-product-button-div`;
  // let Supplemnts_product_button_span = document.createElement('span');
  // Supplemnts_product_button_span.textContent = 'Quantity:';
  // Supplemnts_product_button_span.className = 'quantity';
  // Supplemnts_product_button_div.appendChild(Supplemnts_product_button_span);
  // let Supplemnts_product_button_input = document.createElement('input');
  // Supplemnts_product_button_input.className = 'quantity';
  // Supplemnts_product_button_input.type = 'number';
  // Supplemnts_product_button_div.appendChild(Supplemnts_product_button_input);
  // let Supplemnts_product_button = document.createElement('button');
  // Supplemnts_product_button.className = `${this.type}-product-button`;
  // Supplemnts_product_button.type = 'submit';
  // Supplemnts_product_button.value = JSON.stringify(this);
  // Supplemnts_product_button.name = this.title;
  // Supplemnts_product_button.innerHTML = 'Add to Cart';
  // Supplemnts_product_button.id = `${this.type}-product-button`;
  // Supplemnts_product_button_div.appendChild(Supplemnts_product_button)
  // Supplemnts_product.appendChild(Supplemnts_product_button_div);
  // console.log(Supplemnts_product_button.id);

  /// form
  let Supplemnts_product_form = document.createElement('form');
  Supplemnts_product_form.id = 'products-form';
  let Supplemnts_product_button_div = document.createElement('div');
  Supplemnts_product_button_div.className = `${this.type}-product-button-div`;
  /// label
  let Supplemnts_product_button_label = document.createElement('label');
  Supplemnts_product_button_label.textContent = 'Quantity:';
  Supplemnts_product_button_label.className = 'quantity';
  Supplemnts_product_button_label.for = 'quantity';
  Supplemnts_product_button_div.appendChild(Supplemnts_product_button_label);
  /// input
  let Supplemnts_product_button_input = document.createElement('input');
  Supplemnts_product_button_input.className = 'quantity';
  Supplemnts_product_button_input.type = 'number';
  Supplemnts_product_button_input.id = 'quantity';
  Supplemnts_product_button_input.name = 'quantity';
  Supplemnts_product_button_input.value = '1';
  Supplemnts_product_button_input.min = '1';
  Supplemnts_product_button_div.appendChild(Supplemnts_product_button_input);
  /// empty box
  let Supplemnts_product_box = document.createElement('input');
  Supplemnts_product_box.className = `${this.type}-product-button`;
  Supplemnts_product_box.type = 'text';
  Supplemnts_product_box.id = 'hiddenbtn';
  Supplemnts_product_box.name = 'hiddenbtn';
  Supplemnts_product_box.value = JSON.stringify(this);
  // Supplemnts_product_button.name = this.title;
  // Supplemnts_product_button.innerHTML = 'Add to Cart';
  // Supplemnts_product_box.id = `${this.type}-product-button`;
  Supplemnts_product_box.style.display = 'none';
  Supplemnts_product_button_div.appendChild(Supplemnts_product_box);

  /// btn
  let Supplemnts_product_button = document.createElement('input');
  Supplemnts_product_button.className = `${this.type}-product-button`;
  Supplemnts_product_button.type = 'submit';
  Supplemnts_product_button.value = 'Add to Cart';
  // Supplemnts_product_button.name = this.title;
  // Supplemnts_product_button.innerHTML = 'Add to Cart';
  Supplemnts_product_button.id = `${this.type}-product-button`;
  // Supplemnts_product_button.style.display = 'none';
  Supplemnts_product_button_div.appendChild(Supplemnts_product_button);



  Supplemnts_product_form.appendChild(Supplemnts_product_button_div);
  Supplemnts_product.appendChild(Supplemnts_product_form);
  


};

Product.prototype.to_localstorage = function () {

};


// let products_form = document.getElementById('products-form');

