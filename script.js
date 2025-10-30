// Get all radio inputs
const radioInputs = document.querySelectorAll('input[name="bogo-option"]');
const totalElement = document.querySelector(".total-price");
const addToCartBtn = document.querySelector(".add-to-cart-btn");

// Price mapping for each option
const prices = {
  option1: 10.0,
  option2: 18.0,
  option3: 24.0,
};

// Update total when option changes
function updateTotal() {
  const selectedOption = document.querySelector(
    'input[name="bogo-option"]:checked'
  );
  if (selectedOption && totalElement) {
    const price = prices[selectedOption.id];
    totalElement.textContent = `$${price.toFixed(2)} USD`;
  }
}

// Add event listeners to all radio inputs
radioInputs.forEach((radio) => {
  radio.addEventListener("change", updateTotal);
});

// Add to cart button handler
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedOption = document.querySelector(
      'input[name="bogo-option"]:checked'
    );
    if (selectedOption) {
      const label = selectedOption
        .closest(".option-item")
        .querySelector(".option-title").textContent;
      alert(`Added to Cart: ${label}`);
    }
  });
}

// Initialize total on page load
updateTotal();
