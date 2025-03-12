function updatePrice() {
    let service = document.getElementById("service").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let pricePer1000 = {
        followers: 149,
        likes: 19,
        views: 29,
        comments: 199
    };
    let totalPrice = (quantity / 1000) * pricePer1000[service];
    document.getElementById("totalPrice").innerText = totalPrice;
}
