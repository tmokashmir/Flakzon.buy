const serviceRates = {
    followers: 0.13,  
    likes: 0.02,      
    comments: 0.149,  
    views: 0.003,     
    story_views: 0.002 
};

function showServices(platform) {
    if (platform) {
        document.getElementById("service-selection").classList.remove("hidden");
    } else {
        document.getElementById("service-selection").classList.add("hidden");
    }
    document.getElementById("payment-section").classList.add("hidden");
}

function updatePrice() {
    let serviceType = document.getElementById('service-type').value;
    let quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(quantity) || quantity < 1) {
        document.getElementById('total-price').innerText = "0";
        return;
    }

    let totalPrice = quantity * serviceRates[serviceType]; 
    document.getElementById('total-price').innerText = totalPrice.toFixed(3);
}

function showPayment() {
    if (document.getElementById("username").value === "") {
        alert("Please enter your username/link.");
        return;
    }

    document.getElementById("payment-section").classList.remove("hidden");

    let countdown = 120;
    let countdownElement = document.getElementById("countdown");
    
    let timer = setInterval(function() {
        countdownElement.innerText = `Time left: ${countdown} sec`;
        countdown--;

        if (countdown < 0) {
            clearInterval(timer);
            alert("Payment time expired! Redirecting to home.");
            document.getElementById("payment-section").classList.add("hidden");
        }
    }, 1000);
}

function confirmPayment() {
    let transactionId = document.getElementById("transaction-id").value;
    if (transactionId === "") {
        alert("Please enter the transaction ID.");
        return;
    }
    alert("Payment successful! Redirecting...");
    window.location.href = "https://instagram.com/tmo_kashmir";
}
