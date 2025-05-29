function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}
