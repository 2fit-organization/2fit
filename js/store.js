/* eslint-disable no-undef */
'use strict';
///////////////////////////Event listners/////////////////////////////////
middle_section.addEventListener('submit', btnHandler);
filter_form.addEventListener('submit', SEoptionHandler);
filter_form_reset.addEventListener('click', FFRoptionHandler);
let right_section_div = document.createElement('div');

///////////////////////////Event listners functions/////////////////////////////////
function btnHandler(event) {
  event.preventDefault();
  console.log(event.target.quantity.value);
  console.log(event.target.hiddenbtn.value);
  let product_obj = JSON.parse(event.target.hiddenbtn.value);
  product_obj.pro_quantity = parseInt(product_obj.pro_quantity) + parseInt(event.target.quantity.value);
  to_cart.push(product_obj);
  // console.log(to_cart);
  // console.log(typeof (event.target.hiddenbtn.value));
  // console.log(typeof (JSON.parse(event.target.hiddenbtn.value)));
  localStorage.setItem('cart', JSON.stringify(to_cart));
  right_section_div.innerHTML = '';
  right_section_div.className = 'right-section-div';
  right_section.appendChild(right_section_div);
  let right_section_img = document.createElement('img');
  right_section_img.src = product_obj.image_path;
  right_section_img.className = 'right_section_img';
  right_section_div.appendChild(right_section_img);

  let right_section_p = document.createElement('p');
  right_section_p.innerHTML = 'You have added <span style="color:#23689b;"> ' + product_obj.title + ' </span> To the Cart, Succesfully.';
  right_section_div.appendChild(right_section_p);
  //// btn
  let a = document.createElement('a');
  let btn = document.createElement('button');
  btn.className = 'Checkout-btn';
  btn.innerText = 'Checkout ' + '( ' + to_cart.length + ' )';
  a.href = 'checkout.html';
  a.appendChild(btn);
  right_section_div.appendChild(a);

  // if (Checkout_btn_div.innerHTML === '') {
  //   console.log('test');
  //   let a = document.createElement('a');
  //   let btn = document.createElement('button');
  //   btn.className = 'Checkout-btn';
  //   btn.innerText = 'Checkout';
  //   a.href = 'checkout.html';
  //   a.appendChild(btn);
  //   Checkout_btn_div.appendChild(a);
  // }
  // }
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


'Maintain-weight';
'Gain-muscle';
'Weight-loss';

///////////////////////////Creating objects/////////////////////////////////






///////////////////////////Calling objects/////////////////////////////////


function call_render_products() {
  let p1 = new Product(
    'CLA Capsules',
    'Conjugated Linoleic Acid (CLA) is a naturally occurring omega-6 fatty acid, which is super-important for your everyday health. One of our most popular supplements, these softgels provide 1000mg of safflower oil with 80% CLA per serving.',
    '11',
    'CLA-Capsules.jpg',
    'Supplemnts',
    'Weight-loss');
  let p2 = new Product(
    'Extreme Gainer Blend',
    'COur gainer boasts 35g of protein and a staggering 61g of carbs, for a massive total of 446 calories per serving, supporting your goal of packing on muscle and size.',
    '32',
    'Extreme-Gainer-Blend.jpg',
    'Supplemnts',
    'Gain-muscle');
  let p3 = new Product(
    'Impact Diet Whey',
    'Specially developed to cut out unnecessary carbs, this delicious shake delivers 39g of protein per serving, along with other diet-specific ingredients geared towards your weight-loss journey.',
    '13',
    'Impact-Diet-Protein.jpg',
    'Supplemnts',
    'Weight-loss');
  let p4 = new Product(
    'Impact Whey Protein',
    'Get yours in over 40 flavours, with delicious favourites including Chocolate, Vanilla, and Strawberry Cream.',
    '5',
    'Impact-Whey-Protein.jpg',
    'Supplemnts',
    'Gain-muscle');
  let p5 = new Product(
    'Myprotein Starter Pack',
    'never been easier to get set for your session. Whether you’re completing a gruelling circuits class, got a date with the weights, or just want to supplement your daily diet – these protein essentials will support your goals and make hitting requirements simple..',
    '20',
    'Myprotein-Starter-Pack.png',
    'Supplemnts',
    'Maintain-weight');
  let p6 = new Product(
    'Protein Cookie',
    'The ultimate high-protein treat, weve pulled out all the stops to deliver 38g of protein in seven indulgent flavours — including Double Chocolate and Rocky Road.And, it’s super- convenient to have on your desk at work or to eat straight after a workout.',
    '26',
    'Protein-Cookie.jpg',
    'Supplemnts',
    'Weight-loss');
  let p7 = new Product(
    'Protein Meal Replacement Blend',
    'Being mindful about your calorie intake doesn’t mean you should give up on nutrients and taste. Our delicious high-protein, high-fibre blend will support your weight loss goals while still providing your body with the essentials it needs.',
    '20',
    'Protein-Meal-Replacement-Blend.jpg',
    'Supplemnts',
    'Maintain-weight');
  let p8 = new Product(
    'Pure Caffeine Tablets',
    'A popular pre-workout ingredient, our Pure Caffeine tablets deliver a super-energising boost of caffeine — to power you through even the toughest workouts.',
    '14',
    'Pure-Caffeine-Tablets.jpg',
    'Supplemnts',
    'Maintain-weight');
  let p9 = new Product(
    'Soy Protein Isolate',
    'Newly reformulated for even better flavour and texture, Soy Protein Isolate is a great choice for vegetarians, vegans, and anyone wanting to reduce the amount of dairy in their diet',
    '9',
    'Soy-Protein-Isolate.jpg',
    'Supplemnts',
    'Maintain-weight');

  let p10 = new Product(
    'Thermopure Capsules',
    'Our formula of essential vitamins and popular ingredients including green tea and black pepper extracts — that’ll boost your everyday wellbeing, with caffeine increasing endurance performance.',
    '24',
    'Thermopure-Capsules.jpg',
    'Supplemnts',
    'Maintain-weight');

  let p11 = new Product(
    'Weight Gainer Blend',
    'Gaining weight can be a difficult task for some, so may need to add in some supplements. This is where our Weight Gainer Blend comes in handy. With the macronutrients in this product,',
    '12',
    'Weight-Gainer-Blend.jpg',
    'Supplemnts',
    'Gain-muscle');

  let p12 = new Product(
    'Resistance Bands Pair (11-36kg) - Blue',
    'Whether you’re looking to boost your bench, supersize your squats, or increase the difficulty of your home workout, our Resistance Bands can be added to any exercise. These exercise bands also come in a variety of resistance levels,',
    '18',
    'resustance-bands.jpg',
    'Equipments',
    'Gain-muscle');

  let p13 = new Product(
    'Booty Band',
    'Add resistance to any workout, wherever you are. Our Booty Band helps you to take your leg day to the next level, whether you can make it to the gym or not.',
    '16',
    'Booty-Band.jpg',
    'Equipments',
    'Gain-muscle');
  let p14 = new Product(
    'Mini Shaker',
    'The Mini Shaker is the perfect substitute for an electric whisk and gives you a smooth shake whatever supplement you’re mixing.',
    '4',
    'Mini-Shaker.jpg',
    'Equipments',
    'Gain-muscle');
}

call_render_products();

