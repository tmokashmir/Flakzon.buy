function sendOrderEmail(username, platform, service, quantity, totalPrice) {
    let emailParams = {
        to_email: TO_EMAIL,
        subject: "New Order Received - Flakzon SMM",
        message: `
            New Order Received:
            ---------------------------
            Username: ${username}
            Platform: ${platform}
            Service: ${service}
            Quantity: ${quantity}
            Total Price: ₹${totalPrice}
        `
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams, EMAILJS_USER_ID)
        .then(response => {
            console.log("Email Sent Successfully!", response);
        })
        .catch(error => {
            console.error("Email Sending Failed!", error);
        });
}

function proceedToPayment() {
    let username = document.getElementById('username').value;
    let quantity = document.getElementById('quantity').value;
    let totalPrice = parseFloat(document.getElementById('total-price').innerText);
    
    if (!username || quantity === '' || quantity < 1) {
        alert("Please enter a valid username and quantity");
        return;
    }

    let walletBalance = localStorage.getItem("walletBalance") ? parseFloat(localStorage.getItem("walletBalance")) : 0;

    if (totalPrice > walletBalance) {
        alert("Insufficient balance! Please add funds.");
        return;
    }

    walletBalance -= totalPrice;
    localStorage.setItem("walletBalance", walletBalance);
    document.getElementById("wallet-balance").innerText = walletBalance.toFixed(2);

    alert("Order Placed Successfully!");

    // Auto Email Notification
    sendOrderEmail(username, selectedPlatform, selectedService, quantity, totalPrice);
}
