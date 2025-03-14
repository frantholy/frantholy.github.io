/////// DESAFIO CHALLENGE AMIGO SECRETO
// Declaramos la lista "amigo" para almacenar los nombres de los amigos
let amigo = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios al principio y al final

    // Se limita que el nombre ingresado no contenga números, ni carácteres. Solo se permiten letras.
    const nombreValido = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/; 

    // Verificar si el campo está vacío o el nombre contiene solo espacios
    if (!nombreAmigo) {
        alert("Por favor ingresa un nombre válido para agregar a la lista (No se permiten números o carácteres especiales).");
        inputAmigo.focus(); // Colocar el foco en el input
        return;
    }

    // Validar que el nombre solo contenga letras y espacios (con tildes)
    if (!nombreValido.test(nombreAmigo)) {
        alert("Por favor ingresa un nombre válido para agregar a la lista (No se permiten números o carácteres especiales).");
        inputAmigo.focus(); // Colocar el foco en el input
        return;
    }

    // Verificar si el amigo ya está en la lista (nombres duplicados)
    if (amigo.includes(nombreAmigo)) {
        alert("Este amigo ya ha sido agregado a la lista.");
        inputAmigo.focus(); // Colocar el foco en el input
        return;
    }

    // Si el nombre es válido y no está repetido, agregarlo a la lista
    amigo.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el campo de texto
    inputAmigo.focus(); // Establecer el foco de nuevo
    listaAmigo(); // Actualizar la lista en la pantalla
}

// Función para mostrar la lista de amigos en la pantalla
function listaAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigo.map(nombre => `<li>${nombre}</li>`).join(''); // Crear una lista 'li' con los amigos
}

// Función para realizar un sorteo entre los amigos
function sortearAmigo() {
    if (amigo.length < 2) {
        alert("No tienes suficientes amigos para el sorteo. Necesitas al menos 2 amigos.");
        return;
    }

    const sorteo = amigo[Math.floor(Math.random() * amigo.length)]; // Seleccionar un amigo aleatorio
    document.getElementById("resultado").innerHTML = `El amigo secreto que ha sido sorteado es: ${sorteo}`;
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista después del sorteo
}

// Función para limpiar la pantalla y reiniciar todo
function limpiarPantalla() {
    amigo = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}
