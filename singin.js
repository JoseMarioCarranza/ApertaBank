const formulario = document.querySelector('#formulario');

const dbUSER = 'a';
const dbPASSWORD = 'a';

function mostrarError(tipoError) {
    let error = document.getElementById(`error${tipoError}`);
    error.classList.remove('escondido');
    error.classList.add('error');
    setTimeout(() => {
        error.classList.remove('error');
        error.classList.add('escondido');
    }, 10000)
}

function validar(nombre, codigo) {
    if (nombre === dbUSER && codigo === dbPASSWORD) {
        console.log('Bienvenido');
        window.location.href = "bancaPersonal.html";
    } else if (nombre === '' && codigo === '') {
        console.log('INGRESA TUS DATOS');
        mostrarError('Datos')
    } else if (nombre != dbUSER) {
        console.log('Usuario incorrecto');
        mostrarError('Usuario');
    } else if (codigo != dbPASSWORD) {
        console.log('Contraseña incorrecta');
        mostrarError('Password');
    } else {
        console.log('Error');
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let usuario = document.querySelector('#usuario').value;
    let password = document.querySelector('#password').value;
    validar(usuario, password);
})