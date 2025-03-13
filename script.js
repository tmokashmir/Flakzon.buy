const serviceRates = {
    instagram: { followers: 0.15, likes: 0.02, comments: 0.149, views: 0.0025 },
    youtube: { followers: 0.17, likes: 0.04, comments: 0.169, views: 0.0225 },
    tiktok: { followers: 0.17, likes: 0.04, comments: 0.169, views: 0.0225 },
    telegram: { followers: 0.17, likes: 0.04, comments: 0.169, views: 0.0225 },
    twitter: { followers: 0.18, likes: 0.045, comments: 0.175, views: 0.025 },
    facebook: { followers: 0.16, likes: 0.03, comments: 0.155, views: 0.02 }
};

let selectedPlatform = '';
let selectedService = '';
let selectedRate = 0;

function showServices(platform) {
    selectedPlatform = platform;
    document.getElementById('service-options').classList.remove('hidden');
    let serviceList = document.getElementById('services-list');
    serviceList.innerHTML = '';

    Object.keys(serviceRates[platform]).forEach(service => {
        let btn = document.createElement('button');
        btn.innerText = `${service.toUpperCase()} - ₹${(serviceRates[platform][service] * 1000).toFixed(2)} per 1K`;
        btn.onclick = () => selectService(platform, service);
        serviceList.appendChild(btn);
    });
}

function selectService(platform, service) {
    selectedService = service;
    selectedRate = serviceRates[platform][service];
    
    document.getElementById('order-form').classList.remove('hidden');
    document.getElementById('selected-service').innerText = `Selected: ${service.toUpperCase()} for ${platform.toUpperCase()} at ₹${(selectedRate * 1000).toFixed(2)} per 1K`;
    
    // Default quantity = 0
    document.getElementById('quantity').value = 0;
    updatePrice();
}

function updatePrice() {
    let quantity = document.getElementById('quantity').value;

    if (quantity < 0 || quantity === "") {
        document.getElementById('quantity').value = 0;
        quantity = 0;
    }

    let totalPrice = quantity * selectedRate;
    document.getElementById('total-price').innerText = totalPrice ? totalPrice.toFixed(2) : '0';
}

function proceedToPayment() {
    let username = document.getElementById('username').value;
    let quantity = document.getElementById('quantity').value;
    let totalPrice = document.getElementById('total-price').innerText;
    
    if (!username || quantity <= 0) {
        alert("Please enter a valid username and quantity");
        return;
    }

    localStorage.setItem('orderDetails', JSON.stringify({ username, selectedPlatform, selectedService, quantity, totalPrice }));
    window.location.href = 'payment.html';
}
