document.addEventListener("DOMContentLoaded", function() {
    const cadastrarLink = document.querySelector('.cadastrar-link');
    const submenu = document.querySelector('.submenu');
    const btnMedico = document.querySelector('.btnmedico');
    const btnPaciente = document.querySelector('.btnpaciente');
    const cadastroFormMedico = document.getElementById('cadastro-medico');
    const cadastroFormPaciente = document.getElementById('cadastro-paciente');
    const fecharIcons = document.querySelectorAll('.cadastro-fechar-icon');

    cadastrarLink.addEventListener('click', function(event) {
        event.preventDefault();
        submenu.classList.toggle('active');
    });

    btnMedico.addEventListener('click', function() {
        cadastroFormMedico.style.transform = 'scale(1)';
    });

    btnPaciente.addEventListener('click', function() {
        cadastroFormPaciente.style.transform = 'scale(1)';
    });

    fecharIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            cadastroFormMedico.style.transform = 'scale(0)';
            cadastroFormPaciente.style.transform = 'scale(0)';
        });
    });
});




const access = document.querySelector('.access');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-login');
const btnPopup = document.querySelector('.btnLogin-popup');
const fecharIcon = document.querySelector('.fechar-icon');
const btnMedico = document.querySelector('.btnmedico');


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

btnMedico.addEventListener('click', () => {
    access.classList.add('active-popup');
});

Btn.addEventListener('click', () => {
    access.classList.add('active-popup');
});

btnMedico.addEventListener('click', irParaCadastro);

function irParaSobrePage() {
    window.location.href = "sobre.html";
}

function irParaCadastro() {
    window.location.href = "cadastro.html";
}

