// script.js
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordFieldType = passwordInput.getAttribute('type');
    if (passwordFieldType === 'password') {
        passwordInput.setAttribute('type', 'text');
        this.textContent = 'Hide';
    } else {
        passwordInput.setAttribute('type', 'password');
        this.textContent = 'Show';
    }
});
