"use strict"

let inputform = document.forms.inputForm;
let cartList = document.getElementById('productList');
let totalPrice = document.getElementById('totalPrice');
let totalDiv = document.getElementById('totalDiv');
let alerts = document.querySelectorAll('.alert');
let shortIcon = document.getElementById('desIcon');

//hiding the total amount display
totalDiv.style.display = 'none';

let totalVal = 0;
let count = 0;

//declaring arrays for the sorting process
let arr = [];
let newarr = [];

//value submission
inputform.addEventListener('submit', (event) => {

    event.preventDefault();
    let productNameInput = inputform.nameInpt.value;
    let productPriceInput = inputform.priceInpt.value;

//empty input validation
    if (productNameInput == '') {
        alerts[0].innerHTML = 'enter product name !!';
        setTimeout(() => {
            alerts[0].innerHTML = '';
        }, 2000);
    }
    else if (productPriceInput == '') {
        alerts[1].innerHTML = 'enter product name !!';
        setTimeout(() => {
            alerts[1].innerHTML = '';
        }, 2000);
    }
//input submission after validation
    else {
    //creating the required elements
        var productDetailElDiv = document.createElement('div');
        productDetailElDiv.setAttribute('class', 'productDetailElDiv');
        var productDetailEl = document.createElement('div');
        productDetailEl.setAttribute('class', 'productDetailEl');
        var listProductName = document.createElement('p');
        listProductName.innerText = productNameInput;
        var listProductPrice = document.createElement('p');
        listProductPrice.innerText = productPriceInput;

        var delIcon = document.createElement('i');
        delIcon.setAttribute('class', 'fa-solid fa-trash');
    
    //appending the elements to display
        productDetailEl.append(listProductName, listProductPrice);
        productDetailElDiv.append(productDetailEl, delIcon);
        cartList.appendChild(productDetailElDiv);

        productDetailElDiv.addEventListener('mouseover',()=> {
            delIcon.style.color='red'
        });
        productDetailElDiv.addEventListener('mouseout',()=> {
            delIcon.style.color='white'
        });
    
    //delete icon function
        delIcon.addEventListener('click', () => {
            let listElPrice = delIcon.parentElement.firstElementChild.lastElementChild.innerText;
            totalPrice.innerText = totalPrice.innerText - listElPrice;
            delIcon.parentElement.remove();
            // console.log(cartList.innerHTML.length);
            if (cartList.innerHTML.length == 17) {
                window.open('index.html','_parent');
            }
        })

    //total value calculation
        totalVal = Number(totalVal) + Number(productPriceInput);
        totalPrice.innerText = totalVal;
        totalDiv.style.display = 'flex';

    //taking the values in new array for sorting
        arr[count]=productDetailElDiv;
        count++
    };
    inputform.reset();
});

//sorting process
let arrcount =0;
shortIcon.addEventListener('click', () => {
    var obj = {}
    for (let element in arr) {
        let a = arr[element].firstElementChild.lastElementChild.innerHTML;
        if (obj[a] == undefined) {
            obj[a] = arr[element];
        }
        else {
            obj[Number(a)+1] = arr[element];
        }
    }
    for (let i in obj) {  
        newarr[arrcount] = obj[i];
        arrcount++
    }
    for (let j=newarr.length-1; j >=0; j--) {
        cartList.appendChild(newarr[j]);
    }
});