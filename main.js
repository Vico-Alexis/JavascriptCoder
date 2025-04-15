function convertir() {
    const tasaCambio = 0.00084; // 1 peso = "x" dolar
    const pesos = parseFloat(document.getElementById("pesos").value);
    const dolares = pesos * tasaCambio;
    const mensaje = `${pesos} pesos son $${dolares} dólares.`;
    document.getElementById('resultado').textContent = mensaje;
    console.log(mensaje)
}
