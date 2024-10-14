// Declaring all the glaze and size prices
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


// Declare empty array
let cart = [];


// Search parameters
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


// Populating drop down data
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


// Adding event listeners for Glazing and Price drop downs
glazeElement.addEventListener('change', glazingChange(glazeElement));
sizeElement.addEventListener('change', sizeChange(sizeElement));


// Adding price change functions every time Glaze and Size is selected
function glazingChange(glazeElement) {
    const priceChange = parseFloat(glazeElement.value);
    baseAndGlaze = parseFloat(rolls[rollType].basePrice) + priceChange;
    finalPrice.textContent = "$ " + baseAndGlaze.toFixed(2);
    sizeChange(sizeElement);
}

function sizeChange(sizeElement) {
    const packChange = parseFloat(sizeElement.value);
    glazeAndSize = baseAndGlaze * packChange;
    finalPrice.textContent = "$ " + glazeAndSize.toFixed(2);
}

// Setting the local storage to be retrieved when page is loaded
function loadLocalStorage() {
    const storedCart = localStorage.getItem('storedCart');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    else {
        cart = [];
    }
    console.log(cart);

}


// Adding event listener for Add to Cart button
const cartBtn = document.querySelector('.itemprice > button');


// Making Roll constructor
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = parseFloat(rollPrice);

        const glazePrice = glazed[this.glazing];
        const sizePrice = sized[this.size];
        const rollImage = imaged[this.type];

        const finalPrice = (rollPrice + parseFloat(glazePrice)) * sizePrice;
        this.finalPrice = finalPrice;

        this.calculatedPrice = "$ " + finalPrice.toFixed(2);
        this.image = '../assets/products/' + rollImage;
    }
}


// Adding functionality to Add to Cart button
cartBtn.addEventListener('click', () => {
    const rollGlazing = glazeElement.options[glazeElement.selectedIndex].text;
    const packSize = sizeElement.options[sizeElement.selectedIndex].text;
    const rollPrice = rolls[rollType].basePrice.toFixed(2);
    addToCart(rollType, rollGlazing, packSize, rollPrice)
}
);


// Add to Cart function + save to local storage implemented
function addToCart(rollType, rollGlazing, packSize, rollPrice) {
    const item = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(item);
    console.log(cart);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
    console.log(localStorage);
}

window.onload = function () {
    loadLocalStorage();
};



/* REFERENCES USED

Lab 5 and Lab 6 examples


*/
