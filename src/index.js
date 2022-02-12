
import $ from "jquery";
import "./css/styles.css";
import Currency from "./js/currency-service.js";

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
    $(".showErrors").text(`Oops! Looks like there was an error: ${response.result}`);
  }
}

async function makeApiCall() {
  const response = await Currency.getCurrency();
  getElements(response);
}

$(document).ready(function () {
  makeApiCall();
  $("#convert").click(function () {
    $("#convert-to-currency").empty();
    let inputAmount = $("#input-amount").val();
    let convertTo = $("select#curr-to > option:selected").val();
    let convertedAmount = inputAmount * convertTo;
    if (convertedAmount === isNaN || undefined) {
      $("#showErrors").text("Uh Oh, it looks like that isn't ins't valid! Try again.");
    } else {
      $("#convert-to-currency").text("$" + convertedAmount);
    }
  });

});



