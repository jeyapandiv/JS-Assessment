"use strict"

let inputform = document.forms.inputForm;

let cartList = document.getElementById('productList');

inputform.addEventListener('submit', (event)=> {
    let productNameInput = inputform.nameInpt.value;
    let productPriceInput = inputform.priceInpt.value;

    event.preventDefault();
    // console.log(productNameInput,productPriceInput);

    var productDetailElDiv = document.createElement('div');
        productDetailElDiv.setAttribute('class','productDetailElDiv');
    var productDetailEl = document.createElement('div');
        productDetailEl.setAttribute('class','productDetailEl');
    var listProductName = document.createElement('p');
        listProductName.innerText = productNameInput;
    var listProductPrice = document.createElement('p');
        listProductPrice.innerText = productPriceInput;
    var delIcon = document.createElement('i');
        delIcon.setAttribute('class','fa-solid fa-trash');
        // delIcon.classList.add('disNone');
        // if (productDetailEl) {
        //     delIcon.classList.add('showDel');
        // }

    console.log(productDetailEl);
    productDetailEl.append(listProductName,listProductPrice);
    productDetailElDiv.append(productDetailEl,delIcon);
    cartList.append(productDetailElDiv);
})