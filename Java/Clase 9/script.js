// 1. OBTENER TODOS LOS ELEMENTOS DEL DOM (Inputs y Mensajes de error)
var form = document.getElementById("suscripcionForm");

var txtNombre = document.getElementById("nombre");
var errNombre = document.getElementById("error-nombre");

var txtEmail = document.getElementById("email");
var errEmail = document.getElementById("error-email");

var txtPassword = document.getElementById("password");
var errPassword = document.getElementById("error-password");

var txtRepetir = document.getElementById("repetirPassword");
var errRepetir = document.getElementById("error-repetirPassword");

var txtEdad = document.getElementById("edad");
var errEdad = document.getElementById("error-edad");

var txtTelefono = document.getElementById("telefono");
var errTelefono = document.getElementById("error-telefono");

var txtDireccion = document.getElementById("direccion");
var errDireccion = document.getElementById("error-direccion");

var txtCiudad = document.getElementById("ciudad");
var errCiudad = document.getElementById("error-ciudad");

var txtCP = document.getElementById("codigoPostal");
var errCP = document.getElementById("error-codigoPostal");

var txtDni = document.getElementById("dni");
var errDni = document.getElementById("error-dni");

// 2. FUNCIONES DE VALIDACIÓN ESPECÍFICAS
// Retornan true si es válido, false si tiene errores.

function validarNombre() {
    var valor = txtNombre.value;
    if (valor.length > 6 && valor.indexOf(" ") > 0) {
        return true;
    }
    return false;
}

function validarEmail() {
    var valor = txtEmail.value;
    // Validacion de email recomendada por MDN
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (expresion.test(valor)) {
        return true;
    }
    return false;
}

function validarPassword() {
    var valor = txtPassword.value;
    var tieneLetra = false;
    var tieneNumero = false;
    var numeros = "0123456789";
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Recorremos letra por letra para buscar numeros y letras de forma rústica
    for (var i = 0; i < valor.length; i++) {
        if (numeros.indexOf(valor[i]) !== -1) { tieneNumero = true; }
        if (letras.indexOf(valor[i]) !== -1) { tieneLetra = true; }
    }

    if (valor.length >= 8 && tieneLetra == true && tieneNumero == true) {
        return true;
    }
    return false;
}

function validarRepetir() {
    if (txtRepetir.value !== "" && txtRepetir.value === txtPassword.value) {
        return true;
    }
    return false;
}

function validarEdad() {
    var edadNum = parseInt(txtEdad.value);
    if (edadNum >= 18) {
        return true;
    }
    return false;
}

function validarTelefono() {
    var valor = txtTelefono.value;
    // Si tiene menos de 7 digitos o contiene algun caracter prohibido
    if (valor.length < 7 || valor.indexOf(" ") !== -1 || valor.indexOf("-") !== -1 || valor.indexOf("(") !== -1 || valor.indexOf(")") !== -1) {
        return false;
    }
    return true;
}

function validarDireccion() {
    var valor = txtDireccion.value;
    var tieneLetra = false;
    var tieneNumero = false;
    var tieneEspacio = false;
    var numeros = "0123456789";
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < valor.length; i++) {
        if (numeros.indexOf(valor[i]) !== -1) { tieneNumero = true; }
        if (letras.indexOf(valor[i]) !== -1) { tieneLetra = true; }
        if (valor[i] === " ") { tieneEspacio = true; }
    }

    if (valor.length >= 5 && tieneLetra == true && tieneNumero == true && tieneEspacio == true) {
        return true;
    }
    return false;
}

function validarCiudad() {
    if (txtCiudad.value.length >= 3) { return true; }
    return false;
}

function validarCP() {
    if (txtCP.value.length >= 3) { return true; }
    return false;
}

function validarDni() {
    var valor = txtDni.value;
    if (valor.length === 7 || valor.length === 8) { return true; }
    return false;
}


// 3. EVENTOS BLUR (Validar al salir del input)

txtNombre.addEventListener("blur", function() {
    if (validarNombre() === false) { errNombre.style.display = "block"; } else { errNombre.style.display = "none"; }
});

txtEmail.addEventListener("blur", function() {
    if (validarEmail() === false) { errEmail.style.display = "block"; } else { errEmail.style.display = "none"; }
});

txtPassword.addEventListener("blur", function() {
    if (validarPassword() === false) { errPassword.style.display = "block"; } else { errPassword.style.display = "none"; }
});

txtRepetir.addEventListener("blur", function() {
    if (validarRepetir() === false) { errRepetir.style.display = "block"; } else { errRepetir.style.display = "none"; }
});

txtEdad.addEventListener("blur", function() {
    if (validarEdad() === false) { errEdad.style.display = "block"; } else { errEdad.style.display = "none"; }
});

txtTelefono.addEventListener("blur", function() {
    if (validarTelefono() === false) { errTelefono.style.display = "block"; } else { errTelefono.style.display = "none"; }
});

txtDireccion.addEventListener("blur", function() {
    if (validarDireccion() === false) { errDireccion.style.display = "block"; } else { errDireccion.style.display = "none"; }
});

txtCiudad.addEventListener("blur", function() {
    if (validarCiudad() === false) { errCiudad.style.display = "block"; } else { errCiudad.style.display = "none"; }
});

txtCP.addEventListener("blur", function() {
    if (validarCP() === false) { errCP.style.display = "block"; } else { errCP.style.display = "none"; }
});

txtDni.addEventListener("blur", function() {
    if (validarDni() === false) { errDni.style.display = "block"; } else { errDni.style.display = "none"; }
});


// 4. EVENTOS FOCUS (Ocultar el mensaje de error al hacer click en el input)

txtNombre.addEventListener("focus", function() { errNombre.style.display = "none"; });
txtEmail.addEventListener("focus", function() { errEmail.style.display = "none"; });
txtPassword.addEventListener("focus", function() { errPassword.style.display = "none"; });
txtRepetir.addEventListener("focus", function() { errRepetir.style.display = "none"; });
txtEdad.addEventListener("focus", function() { errEdad.style.display = "none"; });
txtTelefono.addEventListener("focus", function() { errTelefono.style.display = "none"; });
txtDireccion.addEventListener("focus", function() { errDireccion.style.display = "none"; });
txtCiudad.addEventListener("focus", function() { errCiudad.style.display = "none"; });
txtCP.addEventListener("focus", function() { errCP.style.display = "none"; });
txtDni.addEventListener("focus", function() { errDni.style.display = "none"; });


// 5. EVENTO SUBMIT (Al hacer click en el botón Enviar)

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    var todoValido = true;
    var mensajeErrores = "Por favor, corrija los siguientes campos:\n";
    var mensajeExito = "¡Suscripción exitosa!\n\nDatos ingresados:\n";

    // Chequeamos uno por uno. Si falla, mostramos error, si no, guardamos el dato.
    if (validarNombre() === false) {
        todoValido = false;
        errNombre.style.display = "block";
        mensajeErrores = mensajeErrores + "- Nombre completo\n";
    } else {
        mensajeExito = mensajeExito + "Nombre: " + txtNombre.value + "\n";
    }

    if (validarEmail() === false) {
        todoValido = false;
        errEmail.style.display = "block";
        mensajeErrores = mensajeErrores + "- Email\n";
    } else {
        mensajeExito = mensajeExito + "Email: " + txtEmail.value + "\n";
    }

    if (validarPassword() === false) {
        todoValido = false;
        errPassword.style.display = "block";
        mensajeErrores = mensajeErrores + "- Contraseña\n";
    }

    if (validarRepetir() === false) {
        todoValido = false;
        errRepetir.style.display = "block";
        mensajeErrores = mensajeErrores + "- Repetir contraseña\n";
    }

    if (validarEdad() === false) {
        todoValido = false;
        errEdad.style.display = "block";
        mensajeErrores = mensajeErrores + "- Edad\n";
    } else {
        mensajeExito = mensajeExito + "Edad: " + txtEdad.value + "\n";
    }

    if (validarTelefono() === false) {
        todoValido = false;
        errTelefono.style.display = "block";
        mensajeErrores = mensajeErrores + "- Teléfono\n";
    } else {
        mensajeExito = mensajeExito + "Teléfono: " + txtTelefono.value + "\n";
    }

    if (validarDireccion() === false) {
        todoValido = false;
        errDireccion.style.display = "block";
        mensajeErrores = mensajeErrores + "- Dirección\n";
    } else {
        mensajeExito = mensajeExito + "Dirección: " + txtDireccion.value + "\n";
    }

    if (validarCiudad() === false) {
        todoValido = false;
        errCiudad.style.display = "block";
        mensajeErrores = mensajeErrores + "- Ciudad\n";
    } else {
        mensajeExito = mensajeExito + "Ciudad: " + txtCiudad.value + "\n";
    }

    if (validarCP() === false) {
        todoValido = false;
        errCP.style.display = "block";
        mensajeErrores = mensajeErrores + "- Código Postal\n";
    } else {
        mensajeExito = mensajeExito + "C.P: " + txtCP.value + "\n";
    }

    if (validarDni() === false) {
        todoValido = false;
        errDni.style.display = "block";
        mensajeErrores = mensajeErrores + "- DNI\n";
    } else {
        mensajeExito = mensajeExito + "DNI: " + txtDni.value + "\n";
    }

    // Mostrar el cartel emergente correspondiente
    if (todoValido === true) {
        alert(mensajeExito);
    } else {
        alert(mensajeErrores);
    }
});