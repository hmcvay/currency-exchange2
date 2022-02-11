
import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
  console.log(response);
}

let currencyArray = [];

function getElements(response) {
  if (response) {
    for (let i = 0; i < 171; i++) {
      const currency = response.conversion_rates[i];
      currencyArray.push(currency);
    }
    $(".showResponse").text(currencyArray);    
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

makeApiCall();
console.log(currencyArray);

// $(document).ready(function() {
//   let currency = "";
//   makeApiCall(currency);
//   console.log(currencyArray);
// });