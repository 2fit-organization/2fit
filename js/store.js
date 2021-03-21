// function Product(title, description, price, image_path,type) {
//   this.title = title;
//   this.description= description;
//   this.price= price;
//   this.image_path = `Image/products/${image_path}`;
//   this.type=type;
// }



// Product.prototype.render = function () {
//   if (this.type === 'Supplemnts') {
//     let Supplemnts_product = document.getElementById('Supplemnts-product');
//     //   Supplemnts_product.className = 'Supplemnts-product';
//     ///////// img
//     let Supplemnts_product_img = document.createElement('div');
//     Supplemnts_product_img.className = 'Supplemnts-product-img';
//     let Supplemnts_product_img_img = document.createElement('img');
//     Supplemnts_product_img_img.src = this.image_path;
//     Supplemnts_product_img.appendChild(Supplemnts_product_img_img);
//     Supplemnts_product.appendChild(Supplemnts_product_img);
//     ///////// info
//     let Supplemnts_product_info = document.createElement('div');
//     Supplemnts_product_info.className = 'Supplemnts-product-info';
//     let Supplemnts_product_info_h2 = document.createElement('h2');
//     Supplemnts_product_info_h2.className = 'Supplemnts-product-info-heading';
//     Supplemnts_product_info_h2.innerHTML = this.title;
//     Supplemnts_product_info.appendChild(Supplemnts_product_info_h2);
//     let Supplemnts_product_info_description = document.createElement('p');
//     Supplemnts_product_info_description.className = 'Supplemnts-product-info-description';
//     Supplemnts_product_info_description.innerHTML = this.description;
//     Supplemnts_product_info.appendChild(Supplemnts_product_info_description);
//     let Supplemnts_product_info_price = document.createElement('p');
//     Supplemnts_product_info_price.className = 'Supplemnts-product-info-price';
//     Supplemnts_product_info_price.innerHTML = this.price;
//     Supplemnts_product_info.appendChild(Supplemnts_product_info_price);
//     Supplemnts_product.appendChild(Supplemnts_product_info);
//     ///////// btn
//     let Supplemnts_product_button_div = document.createElement('div');
//     Supplemnts_product_button_div.className = 'Supplemnts-product-button-div';
//     let Supplemnts_product_button = document.createElement('button');
//     Supplemnts_product_button.className = 'Supplemnts-product-button';
//     Supplemnts_product_button.innerHTML = 'Add to Cart';
//     Supplemnts_product_button_div.appendChild(Supplemnts_product_button);
//     Supplemnts_product.appendChild(Supplemnts_product_button_div);
//   } else if (this.type === 'Equipments') {
//     let Equipments_product = document.getElementById('Equipments-product');
//     //   Equipments_product.className = 'Equipments-products';
//     ///////// img
//     let Equipments_product_img = document.createElement('div');
//     Equipments_product_img.className = 'Equipments-product-img';
//     let Equipments_product_img_img = document.createElement('img');
//     Equipments_product_img_img.src = this.image_path;
//     Equipments_product_img.appendChild(Equipments_product_img_img);
//     Equipments_product.appendChild(Equipments_product_img);
//     ///////// info
//     let Equipments_product_info = document.createElement('div');
//     Equipments_product_info.className = 'Equipments-product-info';
//     let Equipments_product_info_h2 = document.createElement('h2');
//     Equipments_product_info_h2.className = 'Equipments-product-info-heading';
//     Equipments_product_info_h2.innerHTML = this.title;
//     Equipments_product_info.appendChild(Equipments_product_info_h2);
//     let Equipments_product_info_description = document.createElement('p');
//     Equipments_product_info_description.className = 'Equipments-product-info-description';
//     Equipments_product_info_description.innerHTML = this.description;
//     Equipments_product_info.appendChild(Equipments_product_info_description);
//     let Equipments_product_info_price = document.createElement('p');
//     Equipments_product_info_price.className = 'Equipments-product-info-price';
//     Equipments_product_info_price.innerHTML = this.price;
//     Equipments_product_info.appendChild(Equipments_product_info_price);
//     Equipments_product.appendChild(Equipments_product_info);
//     ///////// btn
//     let Equipments_product_button_div = document.createElement('div');
//     Equipments_product_button_div.className = 'Equipments-product-button-div';
//     let Equipments_product_button = document.createElement('button');
//     Equipments_product_button.className = 'Equipments-product-button';
//     Equipments_product_button.innerHTML = 'Add to Cart';
//     Equipments_product_button_div.appendChild(Equipments_product_button);
//     Equipments_product.appendChild(Equipments_product_button_div);
//   } else {
//     console.log('Do nothing');
//   }

// };














// let test1 = new Product(
//   'ultimate weight-gain',
//   'Our gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
//   '168 AED',
//   'CLA-Capsules.jpg',
//   'Supplemnts');
// let test3 = new Product(
//   'ultimate weight-gain',
//   'Our gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
//   '168 AED',
//   'CLA-Capsules.jpg',
//   'Supplemnts');
// let test2 = new Product(
//   'ultimate weight-gain',
//   'Our gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
//   '168 AED',
//   'CLA-Capsules.jpg',
//   'Equipments');


// console.log(test1);
// console.log(test2);
// test1.render();
// test2.render();
// test3.render();