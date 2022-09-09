


const cardNum = document.querySelector("#cardNum")
const cardName = document.querySelector("#cardName")
const cardDate = document.querySelector("#cardDate")
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const name = document.querySelector("#name")
const Month = document.querySelector("#Month")
const Year = document.querySelector("#Year")
const cvc = document.querySelector("#cvc")
const submit = document.querySelector("#submit")

function formatCreditCard() {
    let x = document.getElementById("credit_card");
    let index = x.value.lastIndexOf(' ');
    let test = x.value.substr(index + 1);
    if (test.length === 4) x.value = x.value + ' ';
    
}
submit.addEventListener('click', () => {
    cardNum.innerHTML = test.innerHTML

})
