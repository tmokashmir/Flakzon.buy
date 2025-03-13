// 5-minute countdown timer
let timeLeft = 300; // 300 seconds = 5 minutes
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    countdownElement.innerText = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft === 0) {
        alert("Time is up! Redirecting to Home Page...");
        window.location.href = "index.html";
    } else {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown(); // Start countdown when page loads

function confirmPayment() {
    let txnId = document.getElementById('upi-txn-id').value;
    if (!txnId) {
        alert("Please enter the UPI Transaction ID");
        return;
    }

    alert("Payment Confirmed! Redirecting...");
    window.location.href = "https://www.instagram.com/flakzon.buy";
}
