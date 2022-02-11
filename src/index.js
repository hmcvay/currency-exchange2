
import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";
// import Exchange from "./js/currency.js";

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
}

function getElements(response) {
  if (response) {
    $("ul#currency").append(`<li>Currency</li>`);
    $("ul#rate").append(`<li>Conversion Rate</li>`);
    let currenciesArray = Object.keys(response.conversion_rates);
    let ratesArray = Object.values(response.conversion_rates);
    for (let i = 0; i < 161; i++) {
      const currency = currenciesArray[i];
      const rate = Math.round(ratesArray[i] * 100) / 100;
      $("ul#currency").append(`<li>${currency}</li>`);
      $("ul#rate").append(`<li>$${rate}</li>`);
      $("select#curr-to").append(`<option value=${rate}>${currency}</option>`);
    }
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

// async function makeApiCall2() {
//   const response = await Currency.getExchange(convertTo, amount);
//   getExchange(response);
// }

// function getExchange(response) {
//   if (response){
//    let currencyNameArray = Object.keys(response.conversion_rates);
//   } else {

//   }
// }

makeApiCall();

// $(document).ready(function() {
//   let currency = "";
//   makeApiCall(currency);
//   console.log(currencyArray);
// });