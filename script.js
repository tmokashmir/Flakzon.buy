document.getElementById("quantity").addEventListener("input", function() {
    let quantity = parseInt(this.value);
    let service = document.getElementById("service").value;
    let pricePer1000 = service === "followers" ? 149 : service === "likes" ? 19 : service === "views" ? 29 : 199;
    document.getElementById("price").innerText = (quantity / 1000) * pricePer1000;
});

function submitOrder() {
    let userId = document.getElementById("userId").value;
    let email = document.getElementById("email").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").innerText;

    emailjs.send("service_xxx", "template_flakzon", {
        user_id: userId,
        email: email,
        quantity: quantity,
        price: price
    }).then(function(response) {
        alert("Order Placed Successfully!");
        setTimeout(() => { window.location.href = "https://instagram.com/flakzon.buy"; }, 5000);
    });
}
