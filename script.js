function updatePrice(service, rate) {
    let quantity = document.getElementById(service + "Qty").value;
    let total = quantity * rate;
    document.getElementById(service + "Price").innerText = total;
}
