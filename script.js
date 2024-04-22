const access = document.querySelector('.access');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-login');
const btnPopup = document.querySelector('.btnLogin-popup');
const fecharIcon = document.querySelector('.fechar-icon');

registrarLink.addEventListener('click', () => {
    access.classList.add('active');
});

loginLink.addEventListener('click', () => {
    access.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    access.classList.add('active-popup');
});

fecharIcon.addEventListener('click', () => {
    access.classList.remove('active-popup');
});
