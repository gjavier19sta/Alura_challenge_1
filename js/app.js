// Función para encriptar el texto
function encriptarTexto() {
    const input = document.getElementById("inputText").value;
    
    // Validar que no haya mayúsculas ni caracteres especiales
    if (/[^a-z\s]/.test(input)) {
        alert("El texto no debe contener mayúsculas ni caracteres especiales.");
        return;
    }

    let textoEncriptado = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const input = document.getElementById("inputText").value;

    let textoDesencriptado = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}
