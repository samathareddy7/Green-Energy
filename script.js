function showProducts(category) {
  // Hide all products first
  document.getElementById('solar-products').style.display = 'none';
  document.getElementById('wind-products').style.display = 'none';

  // Display the selected category's products
  if (category === 'solar') {
    document.getElementById('solar-products').style.display = 'block';
  } else if (category === 'wind') {
    document.getElementById('wind-products').style.display = 'block';
  }
}
