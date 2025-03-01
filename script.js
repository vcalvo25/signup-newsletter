/*const popup = document.getElementById("popup");
const overlay = document.getElementById("popupOverlay");
const card = document.getElementById("hideCard");
const dismissBtn = document.getElementById("dismissBtn");
const emailInput = document.querySelector('input[name="email"]').value;

function togglePopup() {
    popup.style.display = "block";
    overlay.style.display = "block";
    card.style.display = "none";
}

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
    card.style.display = "flex";
}*/

const email = document.getElementById('email');
const submitBtn = document.querySelector('submit');
const invalidEmail = document.getElementById("invlaid-email");
const emailInput = document.getElement

function validateEmail(email) {
    const isValidEmail = /^\S+@\S+$/g
    return isValidEmail.text(email);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailInput.ariaValueMax.trim()

    if(!validateEmail(email)) {
        invalidEmail.classList.add('active')
        emailInput.classList.add('active')
    }
})
