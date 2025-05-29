// Get the search input element
var searchInput = document.getElementById('searchInput');

// Get the popup element
var popup = document.getElementById('popup');

// Attach a click event listener to the search input
searchInput.addEventListener('click', function() {
  // Show the popup
  popup.style.display = 'block';
});

// Attach a click event listener to the document
document.addEventListener('click', function(event) {
  // Check if the clicked element is outside the search input or the popup
  if (event.target !== searchInput && event.target !== popup) {
    // Hide the popup
    popup.style.display = 'none';
  }
});
