document.addEventListener("DOMContentLoaded", function () {
  const invalidEmail = document.getElementById("invalid-email");
  const emailInput = document.getElementById("email");
  const submitBtn = document.getElementById("submit-btn");
  const dismissBtn = document.getElementById("dismiss-btn");
  const popup = document.getElementById("popup");
  const card = document.querySelector(".card");
  const overlay = document.getElementById("popupOverlay"); 

  function validateEmail(email) {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidEmail.test(email);
  }

  function togglePopup() {
    popup.classList.toggle("show");
    overlay.classList.toggle("show");
    card.style.display = popup.classList.contains("show") ? "none" : "flex";

    if (popup.classList.contains("show")) {
      const email = emailInput.value.trim();
      const emailElement = popup.querySelector("p b");
      emailElement.textContent = email || "ash@loremcompany.com";
    }
  }

  function closePopup() {
    popup.classList.remove("show");
    overlay.classList.remove("show");
    card.style.display = "flex";
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !validateEmail(email)) {
      invalidEmail.style.display = "flex";
    } else {
      invalidEmail.style.display = "none";
      togglePopup();
    }
  });

  dismissBtn.addEventListener("click", closePopup);
});