const glaze = [
    {
        glazing: 'Keep original',
        price: 0,
    },
    {
        glazing: 'Sugar milk',
        price: 0,
    },
    {
        glazing: 'Vanilla milk',
        price: 0.5,
    },
    {
        glazing: 'Double chocolate',
        price: 1.5,
    }
]

const size = [
    {
        value: '1',
        price: 1,
    },
    {
        value: '3',
        price: 3,
    },
    {
        value: '6',
        price: 5,
    },
    {
        value: '12',
        price: 10,
    }
]

let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const rollName = document.querySelector('#rollname');
rollName.innerText = rollType;


const rollImage = document.querySelector('.imgfull');
const finalPrice = document.querySelector('.itemprice > p');

let baseAndGlaze = 0;
let glazeAndSize = 0;

rollImage.src = '../assets/products/' + rolls[rollType].imageFile;
finalPrice.textContent = '$' + rolls[rollType].basePrice.toFixed(2);

let glazeElement = document.querySelector('#glazingOptions');

for (let i = 0; i < glaze.length; i++) {
    let option = document.createElement('option');
    option.text = glaze[i].glazing;
    option.value = glaze[i].price;
    glazeElement.add(option);
}

let sizeElement = document.querySelector('#sizeOptions');

for (let i = 0; i < size.length; i++) {
    let option = document.createElement('option');
    option.text = size[i].value;
    option.value = size[i].price;
    sizeElement.add(option);
}

glazeElement.addEventListener('change', glazingChange(glazeElement));
sizeElement.addEventListener('change', sizeChange(sizeElement));

function glazingChange(glazeElement) {
    const priceChange = parseFloat(glazeElement.value);
    //console.log("Glaze Price:" + priceChange);
    baseAndGlaze = parseFloat(rolls[rollType].basePrice) + priceChange;
    //console.log("Base + Glaze Price:" + baseAndGlaze);
    finalPrice.textContent = "$ " + baseAndGlaze.toFixed(2);
    sizeChange(sizeElement);
}

function sizeChange(sizeElement) {
    const packChange = parseFloat(sizeElement.value);
    //console.log("Pack Price:" + packChange);
    glazeAndSize = baseAndGlaze * packChange;
    //console.log("Glaze + Pack Price:" + glazeAndSize);
    finalPrice.textContent = "$ " + glazeAndSize.toFixed(2);

}

const cartBtn = document.querySelector('.itemprice > button');

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

cartBtn.addEventListener('click', () => {
    const rollGlazing = glazeElement.options[glazeElement.selectedIndex].text;
    const packSize = sizeElement.options[sizeElement.selectedIndex].text;
    const basePrice = rolls[rollType].basePrice.toFixed(2);
    addToCart(rollType, rollGlazing, packSize, basePrice)
}
);

function addToCart(rollType, rollGlazing, packSize, basePrice) {
    const item = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(item);
    console.log(cart);
}


/* REFERENCES USED

https://www.w3schools.com/js/js_whereto.asp
https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript
https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex


*/
