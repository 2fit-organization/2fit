let cart = JSON.parse(localStorage.getItem('cart'));
// console.log(typeof (cart));
// console.log( cart);

let checkout_table_tbody = document.getElementById('checkout_table_tbody');
let total_price = document.getElementById('total_price');
let total_items = document.getElementById('total_items');
let pay_button = document.getElementById('Pay_button');
let clear_button = document.getElementById('clear_button');


update_cart();
checkout_table_tbody.addEventListener('click', CTTHandler);

function CTTHandler(event) {
  if (event.target.id === 'Delete') {
    // console.log('here');
    cart.splice(event.target.i, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    update_cart();
    console.log(cart);
  }

}

function update_cart() {
  checkout_table_tbody.textContent = '';
  for (let i = 0; i < cart.length; i++) {
    //   console.log(cart[i].title);
    //   console.log(cart[i].image_path);
    //   console.log(cart[i].price);

    /////tr
    let checkout_table_tbody_tr = document.createElement('tr');
    // checkout_table_tbody_tr.name = cart[i].title;
    checkout_table_tbody_tr.id = i;
    checkout_table_tbody.appendChild(checkout_table_tbody_tr);
    ///// img td
    let checkout_table_tbody_td_img = document.createElement('td');
    let checkout_table_tbody_img = document.createElement('img');
    checkout_table_tbody_img.src = cart[i].image_path;
    checkout_table_tbody_td_img.appendChild(checkout_table_tbody_img);
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_img);
    ///// p td
    let checkout_table_tbody_td_p = document.createElement('td');
    checkout_table_tbody_td_p.textContent = cart[i].title;
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_p);
    ///// price td
    let checkout_table_tbody_td_price = document.createElement('td');
    checkout_table_tbody_td_price.textContent = cart[i].price + ' JOD';
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_price);
    ///// Quantity 
    let checkout_table_tbody_td_quantity = document.createElement('td');
    checkout_table_tbody_td_quantity.textContent = cart[i].pro_quantity + ' Item/s';
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_quantity);
    ///// Total
    let checkout_table_tbody_td_total = document.createElement('td');
    checkout_table_tbody_td_total.textContent = (cart[i].pro_quantity * parseInt(cart[i].price)) + ' JOD';
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_total);
    ////// Delete
    let checkout_table_tbody_td_delete = document.createElement('td');
    checkout_table_tbody_td_delete.textContent = 'Delete';
    checkout_table_tbody_td_delete.className = 'Delete';
    checkout_table_tbody_td_delete.id = 'Delete';
    checkout_table_tbody_td_delete.name = i;
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_delete);

    /////// prepare the total
  }
  let t_price = 0;
  let t_quantity = 0;
  for (let i = 0; i < cart.length; i++) {
    t_price = t_price + (parseInt(cart[i].pro_quantity) * parseInt(cart[i].price));
    console.log(t_price);
    t_quantity = t_quantity + parseInt(cart[i].pro_quantity);
    console.log(t_quantity);
  }
  total_price.textContent = t_price + ' JOD';
  total_items.textContent = t_quantity + ' Items';

}


pay_button.addEventListener('click', erease_handler);
function erease_handler() {
  console.log ('asdasd')
  localStorage.setItem('cart', '');
  checkout_table_tbody.textContent = '';
  total_price.textContent = '0 JOD';
  total_items.textContent = '0 Items';
}

clear_button.addEventListener('click', erease_handler);