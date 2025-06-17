
document.getElementById("randevuForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    date: form.date.value,
    time: form.time.value,
    service: form.service.value
  };

  fetch("https://script.google.com/macros/s/AKfycbzwd5Z_uLHYa2HhaYE78CrHCOGYXN7hWiey8LadfDcDUMoFVBmvb5cllT1agLh_N1DU/exec", {
    method: "POST",
    body: JSON.stringify({ contents: formData }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("message").innerText = data.success
        ? "Randevunuz alındı!"
        : "Bu saat dolu, lütfen başka bir saat seçin.";
    })
    .catch(() => {
      document.getElementById("message").innerText = "Bağlantı hatası. Tekrar deneyin.";
    });
});
