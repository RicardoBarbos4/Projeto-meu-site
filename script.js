// O Formspree cuidará do envio, mas podemos avisar o usuário
const form = document.getElementById('contact-form');

form.addEventListener('submit', function() {
    alert("Enviando sua solicitação... Você receberá uma confirmação por e-mail em instantes.");
});