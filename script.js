const serviceRates = {
    instagram: { followers: 150, likes: 20, comments: 149, views: 2.5 },
    youtube: { followers: 170, likes: 40, comments: 169, views: 22.5 },
    tiktok: { followers: 170, likes: 40, comments: 169, views: 22.5 },
    telegram: { followers: 170, likes: 40, comments: 169, views: 22.5 },
    twitter: { followers: 180, likes: 45, comments: 175, views: 25 },
    facebook: { followers: 160, likes: 30, comments: 155, views: 20 }
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
        btn.innerText = `${service.toUpperCase()} - ₹${serviceRates[platform][service]} per 1K`;
        btn.onclick = () => selectService(platform, service);
        serviceList.appendChild(btn);
    });
}

function selectService(platform, service) {
    selectedService = service;
    selectedRate = serviceRates[platform][service];
    
    document.getElementById('order-form').classList.remove('hidden');
    document.getElementById('selected-service').innerText = `Selected: ${service.toUpperCase()} for ${platform.toUpperCase()} at ₹${selectedRate} per 1K`;
    
    // Set default quantity to 1000
    document.getElementById('quantity').value = 1000;
    updatePrice();
}

function updatePrice() {
    let quantity = document.getElementById('quantity').value;

    // Ensure quantity is at least 1000 and in multiples of 1000
    if (quantity < 1000) {
        document.getElementById('quantity').value = 1000;
        quantity = 1000;
    }

    quantity = Math.round(quantity / 1000) * 1000;
    document.getElementById('quantity').value = quantity;

    let totalPrice = (quantity / 1000) * selectedRate;
    document.getElementById('total-price').innerText = totalPrice ? totalPrice.toFixed(2) : '0';
}

function proceedToPayment() {
    let username = document.getElementById('username').value;
    let quantity = document.getElementById('quantity').value;
    let totalPrice = document.getElementById('total-price').innerText;
    
    if (!username || !quantity) {
        alert("Please enter your username and quantity");
        return;
    }

    localStorage.setItem('orderDetails', JSON.stringify({ username, selectedPlatform, selectedService, quantity, totalPrice }));
    window.location.href = 'payment.html';
}
