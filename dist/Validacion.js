function convertirMoneda() {
    const tasaDolar = 3950;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    if (!isNaN(cantidad)) {
        let resultado = cantidad / tasaDolar;
        document.getElementById("resultado").innerText = `USD $${resultado.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerText = "Ingrese un valor válido.";
    }
}
