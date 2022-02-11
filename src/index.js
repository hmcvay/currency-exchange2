
import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
  console.log(response);
}

// let currencyArray = [];

function getElements(response) {
  if (response) {
    $(".showResponse").text(response);    
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