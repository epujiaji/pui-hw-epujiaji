// Declaring all the Glazing price changes
const glaze = {
    'Original': 0,
    'Sugar Milk': 0,
    'Vanilla Milk': 0.5,
    'Double Chocolate': 1.5
}

//Declaring all the Size price changes
const size = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10
}

//Declaring all the image url links
const image = {
    'Original': "original-cinnamon-roll.jpg",
    'Apple': "apple-cinnamon-roll.jpg",
    'Raisin': "raisin-cinnamon-roll.jpg",
    'Walnut': "walnut-cinnamon-roll.jpg",
    'Double-Chocolate': "double-chocolate-cinnamon-roll.jpg",
    'Strawberry': "strawberry-cinnamon-roll.jpg"
}  

//Make an empty cart array
let cartNow = [];

//Create a Roll class, with Calculated Price included
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        const glazePrice = glaze[this.glazing];
        const sizePrice = size[this.size];
        const rollImage = image[this.type];

        const finalPrice = (rollPrice + glazePrice) * sizePrice;
        this.finalPrice = finalPrice;

        this.calculatedPrice = "$ " + finalPrice.toFixed(2);
        this.image = '../assets/products/' + rollImage;
    }
}

//Make four new Roll objects with Calculated Price
const originalRoll = new Roll(
    "Original",
    "Sugar Milk",
    1,
    2.49
);

const walnutRoll = new Roll(
    "Walnut",
    "Vanilla Milk",
    12,
    3.49
);

const raisinRoll = new Roll(
    "Raisin",
    "Sugar Milk",
    3,
    2.99
);

const appleRoll = new Roll(
    "Apple",
    "Original",
    3,
    3.49
);

//Add objects to cart
cartNow.push(originalRoll, walnutRoll, raisinRoll, appleRoll);
console.log(cartNow);

//Display cart items on page
function displayCartItems(roll) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cartlistitem');

    const btnRmv = roll.element.querySelector('#btnrmv');
    btnRmv.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const cartlist = document.querySelector('.cartlist');
    cartlist.append(roll.element);

    updateCart(roll);
}

//Function to populate cart item content with data from object
function updateCart(roll) {
    const cartImg = roll.element.querySelector('.cartimg');
    const cartName = roll.element.querySelector('#rollname');
    const cartGlaze = roll.element.querySelector('#rollglaze');
    const cartSize = roll.element.querySelector('#rollsize');
    const cartPrice = roll.element.querySelector('#cartrollprice');

    cartImg.src = roll.image;
    cartName.innerText = roll.type;
    cartGlaze.innerText = roll.glazing;
    cartSize.innerText = roll.size;
    cartPrice.innerText = roll.calculatedPrice;

    updatePrice();
}

//Call displayCartItems in a loop through all the array items
for (let roll of cartNow) {
    displayCartItems(roll);
}

//Function to delete item when clicking "remove"
function deleteRoll(roll) {
    roll.element.remove();
    const thisroll = cartNow.indexOf(roll);
    if (thisroll > -1) {
        cartNow.splice(thisroll, 1);
    }
    console.log(cartNow);
    updatePrice();
}

//Function to update total price according to cart content
function updatePrice() {
    let finalTotal = 0;

    for (let i = 0; i < cartNow.length; i++) {
        let currentPrice = parseFloat(cartNow[i].finalPrice);
        finalTotal = finalTotal + currentPrice;
    }
    const cartTotal = document.querySelector('#carttotal');
    cartTotal.innerText = + finalTotal.toFixed(2);


}

/* REFERENCES USED

Lab 5 examples


*/


