const pantalla = document.querySelector('.display');

function addnumber(numero) {
    pantalla.value = pantalla.value + numero;
}

function borrar(borrar) {
    pantalla.value = pantalla.value.slice(0, -1);
}

function operacion(operacion) {
    pantalla.value = pantalla.value + operacion;
}

function resultado(resultado) {
    pantalla.value = eval(pantalla.value);
}