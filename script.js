// Base counts for simulation
let igFollowersCount = 1000;
let ytViewsCount = 10000;

// Function to open the order modal
function openOrderForm(service) {
  document.getElementById('serviceName').textContent = service;
  document.getElementById('orderModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('orderModal').style.display = 'none';
}

// Function to handle order submission
function submitOrder() {
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const service = document.getElementById('serviceName').textContent;

  // For DEMO purposes (no backend integration)
  alert(`Order Received!\nService: ${service}\nEmail: ${email}\nUsername: ${username}`);
  closeModal();
}

// Function to simulate real-time follower/view count updates
function updateLiveCounts() {
  // Randomly increment the counts
  igFollowersCount += Math.floor(Math.random() * 10); // add 0-9 for Instagram
  ytViewsCount += Math.floor(Math.random() * 100);    // add 0-99 for YouTube

  // Update the DOM elements with new counts
  document.getElementById('igFollowers').textContent = igFollowersCount;
  document.getElementById('ytViews').textContent = ytViewsCount;
}

// Start the live update every 3 seconds
setInterval(updateLiveCounts, 3000);

// Initial update call
updateLiveCounts();
