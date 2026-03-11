// Slayt gösterisi
let currentSlide = 0;
function showSlide() {
  const slides = document.querySelectorAll(".slider img");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });
}
function nextSlide() {
  const slides = document.querySelectorAll(".slider img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}
function prevSlide() {
  const slides = document.querySelectorAll(".slider img");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}
setInterval(nextSlide, 4000); // otomatik geçiş

// Bölge seçimi
function bolgeSec(bolge) {
  let ilanlarDiv = document.getElementById("ilanlar");
  ilanlarDiv.innerHTML = "";

  if (bolge === "Beldibi") {
    ilanlarDiv.innerHTML = `
      <div class="ilan">
        <h3>Beldibi Mahallesi – 3+1 Daire</h3>
        <div class="galeri">
          <img src="images/beldibi1.jpg" alt="Beldibi Daire Foto 1">
          <img src="images/beldibi2.jpg" alt="Beldibi Daire Foto 2">
          <img src="images/beldibi3.jpg" alt="Beldibi Daire Foto 3">
        </div>
        <p>Fiyat: 18.000 TL / Aylık</p>
        <p>Doğa içinde, merkeze yakın, balkonlu.</p>
        <button onclick="openPopup()">İletişime Geç</button>
      </div>
    `;
  }
}

// Popup aç/kapat
function openPopup() {
  document.getElementById("popup").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// Form gönderme
function sendMessage(event) {
  event.preventDefault(); // Sayfa yenilenmesin
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  alert("Mesajınız gönderildi!\n\nAd: " + name + "\nTelefon: " + phone + "\nMesaj: " + message);

  // Formu temizle
  document.getElementById("contactForm").reset();
  closePopup();
}
