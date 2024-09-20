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

let finalPrice = document.querySelector('.itemprice > p');

let basePrice = 2.49;
let baseAndGlaze = 0;
let glazeAndSize = 0

glazeElement.addEventListener('change', glazingChange(glazeElement));
sizeElement.addEventListener('change', sizeChange(sizeElement));


function glazingChange(glazeElement) {
    const priceChange = parseFloat(glazeElement.value);
    console.log("Glaze Price:" + priceChange);
    baseAndGlaze = basePrice + priceChange;
    console.log("Base + Glaze Price:" + baseAndGlaze);
    finalPrice.textContent = "$ " + baseAndGlaze.toFixed(2);

    sizeChange(sizeElement);
}


function sizeChange(sizeElement) {
    const packChange = parseFloat(sizeElement.value);
    console.log("Pack Price:" + packChange);
    glazeAndSize = baseAndGlaze * packChange;
    console.log("Glaze + Pack Price:" + glazeAndSize);
    finalPrice.textContent = "$ " + glazeAndSize.toFixed(2);

}


/* REFERENCES USED


https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
https://www.w3schools.com/jsref/met_document_addeventlistener.asp 
https://www.w3schools.com/jsref/prop_node_textcontent.asp
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://www.w3schools.com/jsref/jsref_parsefloat.asp 
https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
https://www.w3schools.com/jsref/jsref_tofixed.asp


*/

