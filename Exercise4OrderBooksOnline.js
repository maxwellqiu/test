function calculateOrder() {
  const prices = {basicWeb: 19.99, introPHP: 86.00, advJQuery: 55.00};
  const basicWebQty = document.getElementById('basicWebQty').value || 0;
  const introPHPQty = document.getElementById('introPHPQty').value || 0;
  const advJQueryQty = document.getElementById('advJQueryQty').value || 0;

  const total = (basicWebQty * prices.basicWeb) +
    (introPHPQty * prices.introPHP) +
    (advJQueryQty * prices.advJQuery);

  document.getElementById('totalCost').textContent = `Total Cost: $${total.toFixed(2)}`;
}
