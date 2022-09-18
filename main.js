
const cardNum = document.querySelector("#cardNum")J
const cardDate = document.querySelector("#cardDate")
const submit = document.querySelector("#submit")

function formatCreditCard() {
    let x = document.getElementById("credit_card");
    let index = x.value.lastIndexOf(' ');
    let test = x.value.substr(index + 1);
    if (test.length === 4) x.value = x.value + ' ';


    
}
function nameInput() {
    const nameValue = document.querySelector('#name').value;
    const cardName = document.querySelector("#cardName");
    cardName.innerHTML = nameValue.innerHTML
}

function monthInput() {
    const monthValue = document.querySelector("#Month").value;
    const month = document.querySelector("#month");
    month.innerHTML = monthValue.innerHTML
}
function yearInput() {
    const yearValue = document.querySelector("#Year").value;
    const year = document.querySelector("#year");
    year.innerHTML = yearValue.innerHTML
}
function cvcInput() {
    const cvcValue = document.querySelector("#Cvc").value;
    const cvc = document.querySelector("#cvc");
    cvc.innerHTML = cvcValue.innerHTML
}