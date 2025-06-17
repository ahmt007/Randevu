
document.getElementById("randevuForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        name: form.name.value,
        phone: form.phone.value,
        date: form.date.value,
        time: form.time.value,
        service: form.service.value
    };

    fetch("https://script.google.com/macros/s/AKfycbzwd5Z_uLHYa2HhaYE78CrHCOGYXN7hWiey8LadfDcDUMoFVBmvb5cllT1agLh_N1DU/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("message").textContent = "Randevunuz alındı! Teşekkürler.";
        form.reset();
    })
    .catch(error => {
        document.getElementById("message").textContent = "Hata oluştu. Lütfen tekrar deneyin.";
    });
});
