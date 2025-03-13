const prices = {
    instagram: { followers: 149, likes: 19, views: 29, comments: 199 },
    tiktok: { followers: 144, likes: 14, views: 24, comments: 194 },
    youtube: { followers: 144, likes: 14, views: 24, comments: 194 }
};

function updateServices() {
    document.getElementById('service').value = "followers";
    updatePrice();
}

function updatePrice() {
    let platform = document.getElementById("platform").value;
    let service = document.getElementById("service").value;
    let quantity = document.getElementById("quantity").value;
    let pricePer1000 = prices[platform][service];
    let totalPrice = (pricePer1000 / 1000) * quantity;
    document.getElementById("totalPrice").innerText = "₹" + totalPrice.toFixed(2);
}

function submitOrder() {
    let userId = document.getElementById("userId").value;
    let email = document.getElementById("email").value;
    let upiId = document.getElementById("upiId").value;
    
    if (!userId || !email || !upiId) {
        alert("Please fill all details!");
        return;
    }

    emailjs.init("X3G3L3PaqkvV94-o-");

    emailjs.send("service_id", "template_flakzon", {
        user_id: userId,
        email: email,
        upi_id: upiId
    }).then(() => {
        alert("Order Submitted Successfully!");
        setTimeout(() => { window.location.href = "https://instagram.com/flakzon.buy"; }, 5000);
    }).catch((error) => {
        alert("Error! Try Again.");
    });
}
