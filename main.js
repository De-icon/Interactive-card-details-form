
const cardNum = document.querySelector("#cardNum")
const cardDate = document.querySelector("#cardDate")
const submit = document.querySelector("#submit")
const thankYou = document.querySelector("#thankYou")
const Continue = document.querySelector("#Continue")
const form = document.querySelector("form")
const nameValue = document.querySelector('#name');
const monthValue = document.querySelector("#Month")
const yearValue = document.querySelector("#Year")
const cvcValue = document.querySelector("#Cvc")


//? formating the credit_card 

function formatCreditCard() {
    let x = document.getElementById("credit_card");
    let index = x.value.lastIndexOf(' ');
    let test = x.value.substr(index + 1);
    if (test.length === 4) x.value = x.value + ' ';
    const cardValue = document.querySelector("#cardNum")
    cardValue.innerHTML = test
    
}

//* this for the name input and also output>>>>>>>>>>>>>>>>

function nameInput() {
    var nameVal = nameValue.value
    const cardName = document.querySelector("#cardName");  
    cardName.innerHTML = nameVal
}

//* this for the month input and also output>>>>>>>>>>>>>>>>


function monthInput() {
    var monthVal = monthValue.value
    const month = document.querySelector("#month");
    month.innerHTML = monthVal
}

//* this for the year input and also output>>>>>>>>>>>>>>>>


function yearInput() {
    var yearVal = yearValue.value
    const year = document.querySelector("#year");
    year.innerHTML = yearVal
}

//* this for the cvc input and also output>>>>>>>>>>>>>>>>


function cvcInput() {
    var cvcVal = cvcValue.value
    const cvc = document.querySelector("#cvc");
    cvc.innerHTML = cvcVal
}

//! submit botton for the form

submit.addEventListener('click', (e) => {
    e.preventDefault()


    thankYou.classList.add("display")
    form.classList.add("noDisplay")
})

//! continue botton

Continue.addEventListener('click', () => {

    nameValue.value = ''
    
    monthValue.value = ''
    yearValue.value = ''
    cvcValue.value = ''
    form.classList.remove("noDisplay")
    thankYou.classList.remove("display")
})