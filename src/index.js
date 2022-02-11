
import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
}

let currenciesArray = [];
let ratesArray = [];

function getElements(response) {
  if (response) {
    const multArray = [];
    $("ul#currency").append(`<li>Currency</li>`);
    $("ul#rate").append(`<li>Conversion Rate</li>`);
    for (let i = 0; i < 171; i++) {
      const currency = response.conversion_rates[i];
      const rate = response.conversion_rates[i]+1;
      $("ul#currency").append(`<li>${currency}</li>`);
      $("ul#rate").append(`<li>${rate}</li>`);
      multArray.push([currency, rate]);
      currenciesArray.push(currency);
      ratesArray.push(rate);
    // Object.entries(response.conversion_rates).forEach((entry) => {
    //   const [key, value] = entry;
    //   currenciesArray.push(entry);
    //   console.log(currenciesArray);
    }
    
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

makeApiCall();

// $(document).ready(function() {
//   let currency = "";
//   makeApiCall(currency);
//   console.log(currencyArray);
// });