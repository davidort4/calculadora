"use strict"
//definimos variables a utilizar
let primerNumero , segundoNumero , tipoOperacion , resultado;

//definimos una funcion para limpiar la pantalla
function limpiarPantalla() {

    
    pantalla.value = " ";

}

//definimos una funcion para marcar botones
function marcarBoton(boton) {

  pantalla.value = pantalla.value + boton;

}
//definimos una funcion para cambiar el signo 
function cambiarsigno() {

    pantalla.value = Number(pantalla.value) * -1;


}
//definimos la funcion para calcular la operacion 
function operacion(op){


    primerNumero = Number(pantalla.value);
    tipoOperacion = Number(op);
    limpiarPantalla();

}

//definimos una funcion para calcular
function calcular(){

    segundoNumero = Number(pantalla.value);
    limpiarPantalla();
    
    switch (tipoOperacion) {

        case 1: 
            resultado = primerNumero + segundoNumero;
        break;
        case 2:
            resultado = primerNumero - segundoNumero;
        break;
        case 3:
            resultado = primerNumero * segundoNumero;
        break;
        case 4:
            resultado = primerNumero / segundoNumero;
        break;
        case 5:
            resultado = Math.pow(primerNumero , segundoNumero);
        break;
        
    }

    pantalla.value = resultado;

}
//definimos una funcion para el porcentaje
function porcentaje() {

    segundoNumero = Number(pantalla.value);
    limpiarPantalla();
    resultado = primerNumero * (segundoNumero/100);
    pantalla.value = resultado;


}