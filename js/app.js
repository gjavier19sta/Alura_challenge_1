/*  
    DOM (data object model) "document"
    document.querySelector("etiqueta"); // esto nos trae todo lo que tenga la etiqueta a la que hacemos referencia. 
    si tenemos muchas etiqueta iguales y diferenciamos por classe será:
    document.querySelector(".nombreClase");
    y si es por id:
    document.querySelector("#nombreID")
    document.getElementById("id del elemento") // esto trae todo el elemento o sea si estoy hablando de una seccion, traería todo lo que si queremos por ejemplo
    obtener el valor del elemento sería
    let variable = document.getElementById("id del elemento").value;

*/


//Funcion para asignar texto a algún elemento del html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function encriptarTexto() {
    const input = document.getElementById("inputText").value;

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

    
    
    asignarTextoElemento(`#h1outputText`,textoEncriptado);
    let poutText = document.querySelector(`#poutputText`);
    poutText.style.display = "none";

    //reformatear los estilos del secundario__contenido__titulo
    const h1input = document.querySelector(".secundario__contenido__titulo");
    h1input.style.marginTop = "8%" ;
    h1input.style.fontSize = "1.5rem" ;
    h1input.style.fontStyle = "bold" ;
    h1input.style.textAlign = "start";
    // reformatear los estilos del secundario__section la jsutificacion 
    const secundariSectionSstyle = document.querySelector(".secundario__section");
    secundariSectionSstyle.style.justifyContent = "space-between";

    const muneco = document.querySelector(".secundario__img_muñeco");
    muneco.style.display = "none";    
    // Mostrar el botón Copiar
    const botonCopiar = document.querySelector(".secundario__button__copiar");
    botonCopiar.style.display = "block";

}


function desencriptarTexto() {
    const input = document.getElementById("inputText").value;

    let textoDesencriptado = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("h1outputText").textContent = textoDesencriptado;

    asignarTextoElemento(`#h1outputText`,textoDesencriptado);
    let poutText = document.querySelector(`#poutputText`);
    poutText.style.display = "none";

    //reformatear los estilos del secundario__contenido__titulo
    const h1input = document.querySelector(".secundario__contenido__titulo");
    h1input.style.marginTop = "8%" ;
    h1input.style.fontSize = "1.5rem" ;
    h1input.style.fontStyle = "bold" ;
    h1input.style.textAlign = "start";

    // reformatear los estilos del secundario__section la jsutificacion 
    const secundariSectionSstyle = document.querySelector(".secundario__section");
    secundariSectionSstyle.style.justifyContent = "space-between";

    const muneco = document.querySelector(".secundario__img_muñeco");
    muneco.style.display = "none";
    //mostar el boton copiar
    const botonCopiar = document.querySelector(".secundario__button__copiar");
    botonCopiar.style.display = "block";

}


function copiarTexto2() {
    const output = document.getElementById("h1outputText");
    output.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

function copiarTexto() {
    const output = document.getElementById("h1outputText").textContent;
//    output.focus(); // Enfoca el textarea (opcional en este caso)
    const texto = output; // Obtén el contenido del textarea
    navigator.clipboard.writeText(texto) // Copia el contenido al portapapeles
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}