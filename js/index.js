function calculateSubTotal(product){

let price = product.querySelector('.price span').innerText;
let quantity = product.querySelector('.quantity input').value;

// console.log(price)
// console.log(quantity)

let subTotal = price * quantity;

// console.log(subTotal)

product.querySelector('.subtotal span').innerText = subTotal;

return subTotal
}

function calculateAll(){

  let total = 0

  let products = document.querySelectorAll('tr.product')
  for(let p of products){
  
    console.log(p)

    total += calculateSubTotal(p)

  }
  document.querySelector('#total-value span').innerText = total
}

document.querySelector('#calculate').onclick = function (e) {
 calculateAll() 
}

 document.querySelector('#create').onclick = function(e)
 console.log(e)

 let productName = document.querySelector('').value

 let productPrice = document.querySelector('').value

 console.log(productPrice)

 let newHtml = `<tr class="product">
 <td class="name">
   <span>${productName}</span>
 </td>
 <td class="price">$<span>${productPrice}</span></td>
 <td class="quantity">
   <input type="number" value="0" min="0" placeholder="Quantity" />
 </td>
 <td class="subtotal">$<span>0</span></td>
 <td class="action">
   <button class="btn btn-remove">Remove</button>
 </td>
</tr>`
document.querySelector('tbody').innerHTML += newHtml

fancyName()
}

function fancyName(){

  let removeButtons = document.querySelectorAll('.btn-remove')


for(let button of removeButtons){
button.onclick = function(e){
  e.target.parentElement.parentElement.remove()  
}
}
}

fancyName(6)