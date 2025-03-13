const serviceRates = {
    instagram: { followers: 150, likes: 20, comments: 149, views: 2.5 },
    youtube: { followers: 170, likes: 40, comments: 169, views: 22.5 },
    tiktok: { followers: 170, likes: 40, comments: 169, views: 22.5 },
    telegram: { followers: 170, likes: 40, comments: 169, views: 22.5 },
    twitter: { followers: 180, likes: 45, comments: 175, views: 25 },
    facebook: { followers: 160, likes: 30, comments: 155, views: 20 }
};

function showServices(platform) {
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
    document.getElementById('order-form').classList.remove('hidden');
    document.getElementById('selected-service').innerText = `Selected: ${service.toUpperCase()} for ${platform.toUpperCase()} at ₹${serviceRates[platform][service]} per 1K`;
}

function proceedToPayment() {
    let username = document.getElementById('username').value;
    if (!username) {
        alert("Please enter your username");
        return;
    }
    localStorage.setItem('orderDetails', JSON.stringify({ username }));
    window.location.href = 'payment.html';
}
