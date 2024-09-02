
function generateCaptcha() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        captcha += charset[randomIndex];
    }
    return captcha;
}

function updateCaptcha() {
    const captchaTextElement = document.getElementById("captchaText");
    captchaTextElement.value = generateCaptcha(); // Set new CAPTCHA
}

// Function to validate the CAPTCHA input
function checkCaptcha() {
    const captchaTextElement = document.getElementById("captchaText");
    const captchaInputElement = document.getElementById("captchaInput");
    const userCaptcha = captchaInputElement.value.trim();
    if (userCaptcha === captchaTextElement.value) {
        alert("CAPTCHA is correct!");
    } else {
        alert("CAPTCHA is incorrect. Please try again.");
        captchaInputElement.value = ""; // Clear input field
        updateCaptcha(); // Refresh CAPTCHA on error
    }
}

// Set initial CAPTCHA when the page loads
window.onload = function() {
    updateCaptcha();
};

// Add event listeners
document.querySelector(".refreshCaptcha").addEventListener("click", updateCaptcha);
document.getElementById("submit").addEventListener("click", checkCaptcha);


