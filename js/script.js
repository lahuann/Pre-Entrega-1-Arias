
//información al usuario
function solicitarInformacion() {
    var nombre = prompt("Ingrese su nombre:");
    var edad = prompt("Ingrese su edad:");
    var email = prompt("Ingrese su dirección de correo electrónico:");

    return {
        nombre: nombre,
        edad: edad,
        email: email
    };
}

//Función para saber si es mayor de edad
function esMayorDeEdad(edad) {
    return edad >= 18;
}

//mensaje de bienvenida
function mostrarBienvenida(usuario) {
    alert("¡Bienvenido, " + usuario.nombre + "!\n" +
        "Edad: " + usuario.edad + "\n" +
        "Email: " + usuario.email);
}

// Programa principal
var usuarioRegistrado = false;

while (!usuarioRegistrado) {
    var informacionUsuario = solicitarInformacion();

    // Verificar si es mayor de edad
    if (esMayorDeEdad(informacionUsuario.edad)) {
        mostrarBienvenida(informacionUsuario);
        usuarioRegistrado = true;
    } else {
        alert("Lo siento, debes ser mayor de edad para registrarte.");
    }
}
