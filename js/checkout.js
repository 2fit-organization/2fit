let cart = JSON.parse(localStorage.getItem('cart'));
console.log(typeof (cart));
console.log( cart);

let checkout_table_tbody = document.getElementById('checkout_table_tbody');

update_cart();
checkout_table_tbody.addEventListener('click', CTTHandler);

function CTTHandler(event) {
  if (event.target.id === 'Delete') {
    console.log('here');
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
    checkout_table_tbody_tr.name = cart[i].title;
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
    checkout_table_tbody_td_price.textContent = cart[i].price;
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_price);
    ////// Delete
    let checkout_table_tbody_td_delete = document.createElement('td');
    checkout_table_tbody_td_delete.textContent = 'Delete';
    checkout_table_tbody_td_delete.className = 'Delete';
    checkout_table_tbody_td_delete.id = 'Delete'
    checkout_table_tbody_td_delete.name = i;
    checkout_table_tbody_tr.appendChild(checkout_table_tbody_td_delete);
  }

}