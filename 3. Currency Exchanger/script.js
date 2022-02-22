const currencyOne = document.getElementById("currency-one");
const quantity = document.getElementById("quantity");
const currencyTwo = document.getElementById("currency-two");
const quantity_2 = document.getElementById("quantity_2");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("btn");

function calculate() {
  const currencyOneValue = currencyOne.value;
  const currencyTwoValue = currencyTwo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currencyTwoValue] / data.rates[currencyOneValue];
      rateEl.innerText = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue}`;
      quantity_2.value = (quantity.value * rate).toFixed(2);
    });
}

currencyOne.addEventListener("change", calculate);
quantity.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
quantity_2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
