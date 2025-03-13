const prices = {
    instagram: { followers: 149, likes: 19, views: 29, comments: 199 },
    tiktok: { followers: 144, likes: 14, views: 24, comments: 194 },
    youtube: { followers: 144, likes: 14, views: 24, comments: 194 },
    telegram: { followers: 144, likes: 14, views: 24, comments: 194 },
    twitter: { followers: 144, likes: 14, views: 24, comments: 194 },
    facebook: { followers: 144, likes: 14, views: 24, comments: 194 }
};

document.getElementById("quantity").addEventListener("input", updatePrice);
document.getElementById("platform").addEventListener("change", updatePrice);
document.getElementById("service").addEventListener("change", updatePrice);

function updatePrice() {
    const platform = document.getElementById("platform").value;
    const service = document.getElementById("service").value;
    const quantity = document.getElementById("quantity").value;
    const pricePer1000 = prices[platform][service];

    if (quantity) {
        document.getElementById("totalPrice").textContent = (quantity / 1000) * pricePer1000;
    } else {
        document.getElementById("totalPrice").textContent = 0;
    }
}

function submitOrder() {
    const userId = document.getElementById("userId").value;
    alert(`Order placed for ${userId}`);
}
