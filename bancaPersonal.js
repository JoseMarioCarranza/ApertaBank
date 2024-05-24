var cuentas = [
    { nombre: 'Personal', saldo: 200 },
    { nombre: 'Ahorro', saldo: 290 },
    { nombre: 'Inversión', saldo: 67 }
];

function mostrarValor() {

    cuentaSeleccionada = document.getElementById("cuenta").value;

    console.log(`Cuenta seleccionada: ${cuentaSeleccionada}`);

    for (let index = 0; index < cuentas.length; index++) {
        if (cuentaSeleccionada === cuentas[index].nombre) {
            document.getElementById("dineroCuenta").value = cuentas[index].saldo;
        }

    }
}

function Ingresar() {
    var numCuenta = 0;

    for (let index = 0; index < cuentas.length; index++) {
        if (document.getElementById("cuenta") === cuentas[index].nombre) {
            numCuenta = index;
        }

    }

    cuentas[numCuenta].saldo = cuentas[numCuenta].saldo + Number(document.getElementById("a").value)

    document.getElementById("a").value = 0

    mostrarValor()
}

function Retirar() {
    var numCuenta = 0;

    for (let index = 0; index < cuentas.length; index++) {
        if (document.getElementById("cuenta") === cuentas[index].nombre) {
            numCuenta = index;
        }

    }

    if (cuentas[numCuenta].saldo >= Number(document.getElementById("a").value)) {
        cuentas[numCuenta].saldo = cuentas[numCuenta].saldo - Number(document.getElementById("a").value);
        document.getElementById("a").value = 0;
        mostrarValor();
    } else {
        error = document.getElementById("errorDinero")
        error.classList.remove("errorOculto");
        error.classList.add("errorVisible");
        setTimeout(() => {
            error.classList.remove("errorVisible");
            error.classList.add("errorOculto");
        }, 10000)
        console.log("error");
    }
}

mostrarValor()