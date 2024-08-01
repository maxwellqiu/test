function processOrder() {
  document.getElementById("orderDetails").innerText="";
  var basicWeb, introPHP, advJQuery;
  var basicWebQty, introPHPQty, advJQueryQty;
  var isValid = true;
  var validatyString = "";

  var basicWebPrice = 19.99, introPHPPrice = 86.00, advJQueryPrice = 55.00;
  var basicWebTotal = 0, introPHPTotal = 0, advJQueryTotal = 0;

  basicWeb = document.getElementById("basicWeb").value;
  introPHP = document.getElementById("introPHP").value;
  advJQuery = document.getElementById("advJQuery").value;

  if (basicWeb.length ==0 || isNaN(basicWeb)){
    isValid = false;
    validatyString += "The quantity for ‘Basic Web Programming' is invalid!\n"
  }
  if (introPHP.length ==0 || isNaN(introPHP)){
    isValid = false;
    validatyString += "The quantity for ‘Intro to PHP' is invalid!\n"
  }
  if (advJQuery.length ==0 || isNaN(advJQuery)){
    isValid = false;
    validatyString += "The quantity for ‘Advanced jQuery' is invalid!\n"
  }

  if (!isValid){
    alert(validatyString)
    return;
  }

  validatyString = "";
  isValid = true;
  basicWebQty = parseInt(basicWeb);
  introPHPQty = parseInt(introPHP);
  advJQueryQty = parseInt(advJQuery);

  if (basicWebQty <0) {
    validatyString += "The quantity for 'Basic Web Programming' must be greater than equal to 0!\n";
    isValid = false;
  }
  if (introPHPQty <0) {
    validatyString += "The quantity for 'Intro to PHP' must be greater than equal to 0!\n";
    isValid = false;
  }
  if (advJQueryQty < 0){
    validatyString += "The quantity for 'Advanced jQuery' must be greater than equal to 0!\n";
    isValid = false;
  }

  if (!isValid){
    alert(validatyString);
    return;
  }

  basicWebTotal = basicWebPrice * basicWebQty;
  introPHPTotal = introPHPPrice * introPHPQty;
  advJQueryTotal = advJQueryPrice * advJQueryQty;

  document.getElementById("orderDetails").innerHTML = "<b>Basic Web Programming(Quantity - " +
    basicWebQty + "):$" + basicWebTotal.toFixed(2) + "<br>Intro to PHP (Quantity - " + introPHPQty +
    "):$" + introPHPTotal.toFixed(2) + "<br>Advanced JQuery (Quantity - " + advJQueryQty + "):$" + advJQueryTotal.toFixed(2) +
    "<br><br>Final Total: $" + (basicWebTotal + introPHPTotal + advJQueryTotal).toFixed(2);
}
