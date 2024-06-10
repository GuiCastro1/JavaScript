function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput)) {
        document.getElementById('feedback').innerHTML = 'Email válido!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').innerHTML = 'Email inválido.';
        document.getElementById('feedback').style.color = 'red';
    }
}
