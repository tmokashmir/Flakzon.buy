function openOrderForm(service) {
    document.getElementById('serviceName').textContent = service;
    document.getElementById('orderModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function submitOrder() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const service = document.getElementById('serviceName').textContent;

    // For DEMO (No backend, so just alert)
    alert(`Order Received!\nService: ${service}\nEmail: ${email}\nUsername: ${username}`);
    closeModal();
}
