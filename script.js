document.addEventListener("DOMContentLoaded", function() {
    const cadastrarLink = document.querySelector('.cadastrar-link');
    const submenu = document.querySelector('.submenu');
    const btnMedico = document.querySelector('.btnmedico');
    const cadastroForm = document.querySelector('.cadastro_form');
    const btnPaciente = document.querySelector('.btnpaciente');
    const cadastroFormPaciente = document.querySelector('.tabela_pacientes .cadastro_form');
    const fecharIcon = document.querySelectorAll('.cadastro-fechar-icon');

    cadastrarLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        submenu.classList.toggle('active');
    });

    btnMedico.addEventListener('click', function() {
        cadastroForm.style.transform = 'scale(1)';
    });

    btnPaciente.addEventListener('click', function() {
        cadastroFormPaciente.style.transform = 'scale(1)';
    });

    fecharIcon.forEach(icon => {
        icon.addEventListener('click', function() {
            cadastroForm.style.transform = 'scale(0)';
            cadastroFormPaciente.style.transform = 'scale(0)';
        });
    });
});







const access = document.querySelector('.access');
const loginLink = document.querySelector('.login-link');
const registrarLink = document.querySelector('.registrar-login');
const btnPopup = document.querySelector('.btnLogin-popup');
const fecharIcon = document.querySelector('.fechar-icon');
const btnMedico = document.querySelector('.btnmedico')


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

btnMedico.addEventListener('click', irParaCadastro);

function irParaSobrePage() {
    window.location.href = "sobre.html";
}

function irParaCadastro() {
    window.location.href = "cadastro.html";
}



