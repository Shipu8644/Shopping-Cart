function updateProductNumber(input, increaseOrDecrease, price) {
    const phoneNumber = document.getElementById(input + '-number');
    const PhoneNumberValue = (phoneNumber.value);
    if (increaseOrDecrease) {
        phoneNumber.value = parseInt(PhoneNumberValue) + 1;
    }
    else if (phoneNumber.value > 0) {
        phoneNumber.value = parseInt(PhoneNumberValue) - 1;
    }

    const money = document.getElementById(input + '-total');
    money.innerText = price * phoneNumber.value;

    Calculation();
}
function getInputValue(product) {
    const productTotalValue = document.getElementById(product + '-number').value;
    return productTotalValue;
}

function Calculation() {
    const phoneTotalValue = getInputValue('phone') * 1219;
    const caseTotalValue = getInputValue('case') * 59;
    const subTotal = phoneTotalValue + caseTotalValue;
    const Tax = subTotal / 10;
    const Total = subTotal + Tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = Tax;
    document.getElementById('total-price').innerText = Total;


}


document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);
})