function showUPI() {
    document.getElementById("upi-section").classList.remove("hidden");
    document.getElementById("bank-section").classList.add("hidden");
}

function showBankTransfer() {
    document.getElementById("bank-section").classList.remove("hidden");
    document.getElementById("upi-section").classList.add("hidden");
}

function confirmFundAddition() {
    let fundAmount = parseFloat(document.getElementById("fund-amount").value);
    let txnId = document.getElementById("upi-txn-id").value;

    if (fundAmount < 10 || isNaN(fundAmount)) {
        alert("Minimum amount is ₹10");
        return;
    }

    if (!txnId) {
        alert("Please enter a valid UPI Transaction ID");
        return;
    }

    let walletBalance = localStorage.getItem("walletBalance") ? parseFloat(localStorage.getItem("walletBalance")) : 0;
    walletBalance += fundAmount;
    localStorage.setItem("walletBalance", walletBalance);

    alert(`₹${fundAmount} added successfully! Redirecting to home page...`);
    window.location.href = "index.html";
}
