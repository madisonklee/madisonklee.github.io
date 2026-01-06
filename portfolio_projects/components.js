// Function to load HTML components
function loadComponents() {
  // Load header
  fetch('../components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

  // Load footer
  fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);
