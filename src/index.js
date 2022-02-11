
import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency.js";

async function makeApiCall(currency) {
  const response = await Currency.getCurrency(currency);
  getElements(response);
}

function getElements(response) {
  if (response) {
    $(".showResponse").text(`${response}`);
    const currency = response[i].
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  makeApiCall(currency);
})