const prices = {
    instagram: { followers: 149, likes: 19, views: 29, comments: 199 },
    tiktok: { followers: 144, likes: 14, views: 24, comments: 194 },
    youtube: { followers: 144, likes: 14, views: 24, comments: 194 },
    telegram: { followers: 144, likes: 14, views: 24, comments: 194 },
    twitter: { followers: 144, likes: 14, views: 24, comments: 194 },
    facebook: { followers: 144, likes: 14, views: 24, comments: 194 }
};

function calculatePrice() {
    let platform = document.getElementById("platform").value;
    let service = document.getElementById("service").value;
    let quantity = document.getElementById("quantity").value;
    let price = (quantity / 1000) * prices[platform][service];
    document.getElementById("price").innerText = price.toFixed(2);
}
