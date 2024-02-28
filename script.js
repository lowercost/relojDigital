//colores de los segmentos
const segmentoApagado = "#080808";
const segmentoEncendido = "ff0000";

// Función para cambiar el bcolor de los puntos cada segundo
function cambiarColor() {
    let puntos = document.getElementsByClassName("puntos");//hacemos referencia a los puntos
    let colorActual = segmentoEncendido; // Color inicial

    setInterval(function() {
        // Cambia entre los dos colores
        if (colorActual === "#f00") {//si "coloractual" es rojo
            colorActual = "#080808";//cambia "coloractual" a gris
        } else {
            colorActual = "#f00";//si no es rojo, cambia a rojo
        }

        // Aplica el nuevo color de fondo a todos los elementos con la clase "puntos"
        for (let i = 0; i < puntos.length; i++) {
            puntos[i].style.backgroundColor = colorActual;
        }
    }, 1000); // Cambia cada segundo
}
cambiarColor();

//Hacemos referencia a cada segmento del reloj

const segmentosHoraDecena = [
    document.getElementById("hora_decena_superior"),//0
    document.getElementById("hora_decena_SD"),//1
    document.getElementById("hora_decena_SI"),//2
    document.getElementById("hora_decena_medio"),//3
    document.getElementById("hora_decena_ID"),//4
    document.getElementById("hora_decena_II"),//5
    document.getElementById("hora_decena_inferior")//6
]

const segmentosHoraUnidad = [
    document.getElementById("hora_unidad_superior"),//0
    document.getElementById("hora_unidad_SD"),//1
    document.getElementById("hora_unidad_SI"),//2
    document.getElementById("hora_unidad_medio"),//3
    document.getElementById("hora_unidad_ID"),//4
    document.getElementById("hora_unidad_II"),//5
    document.getElementById("hora_unidad_inferior")//6
]

const segmentosMinutoDecena = [
    document.getElementById("minuto_decena_superior"),//0
    document.getElementById("minuto_decena_SD"),//1
    document.getElementById("minuto_decena_SI"),//2
    document.getElementById("minuto_decena_medio"),//3
    document.getElementById("minuto_decena_ID"),//4
    document.getElementById("minuto_decena_II"),//5
    document.getElementById("minuto_decena_inferior")//6
]

const segmentosMinutoUnidad = [
    document.getElementById("minuto_unidad_superior"),//0
    document.getElementById("minuto_unidad_SD"),//1
    document.getElementById("minuto_unidad_SI"),//2
    document.getElementById("minuto_unidad_medio"),//3
    document.getElementById("minuto_unidad_ID"),//4
    document.getElementById("minuto_unidad_II"),//5
    document.getElementById("minuto_unidad_inferior")//6
]

    let ahora = new Date(); //Creamos el elemento Date para manejar los digitos
    let horaExacta = ahora.getHours();
    let minutoExacto = ahora.getMinutes();

//Función Reset:
function resetear(segmentos) {
    segmentos.forEach(elemento => {
        elemento.style.backgroundColor = segmentoApagado;
    });
}

    //Programación del reloj

function horasEnPantallaD() {
    if (horaExacta >= 1 && horaExacta <= 9) {
        [0, 1, 2, 4, 5, 6].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    }

    else if (horaExacta >= 10 && horaExacta <= 19) {
        [1, 4].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    }
    
    else if (horaExacta >= 20 && horaExacta <= 29) {
        [0, 1, ,3, 5, 6].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    }
    
    else if (horaExacta >= 30 && horaExacta <= 39) {
        [0, 1, 3, 4, 6].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    } 
    
    else if (horaExacta >= 40 && horaExacta <= 49) {
        [1, 2, 3, 4].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    } 
    
    else if (horaExacta >= 50 && horaExacta <= 59) {
        [0, 2, 3, 4, 6].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    } 
    
    else {
        [0, 1, 2, 4, 5, 6].forEach(index => segmentosHoraDecena[index].style.backgroundColor = "red");
    }
}

function horasEnPantallaU() {
    if ([1, 11, 21, 31, 41, 51].includes(horaExacta)) {
        [1,4].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
        } 
        
    else if ([2, 12, 22, 32, 42, 52].includes(horaExacta)) {
            [0, 1, ,3, 5, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
    
    else if ([3, 13, 23, 33, 43, 53].includes(horaExacta)) {
        [0, 1, 3, 4, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
    else if ([4, 14, 24, 34, 44, 54].includes(horaExacta)) {
            [1, 2, 3, 4].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
    else if ([5, 15, 25, 35, 45, 55].includes(horaExacta)) {
            [0, 2, 3, 4, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
        
    else if ([6, 16, 26, 36, 46, 56].includes(horaExacta)) {
            [0, 2, 3, 4, 5, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
    else if ([7, 17, 27, 37, 47, 57].includes(horaExacta)) {
        [0, 1, 2, 4].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    
    else if ([8, 18, 28, 38, 48, 58].includes(horaExacta)) {
        [0, 1, 2, 3, 4, 5, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
    else if ([9, 19, 29, 39, 49, 59].includes(horaExacta)) {
        [0, 1, 2, 3, 4, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    } 
    else {
        [0, 1, 2, 4, 5, 6].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = "red");
    }    
}

function minutosEnPantallaD (){ 
    if (minutoExacto >= 1 && minutoExacto <= 9) {
        [0, 1, 2, 4, 5, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    } 
    
    else if (minutoExacto >= 10 && minutoExacto <= 19) {
        [1, 4].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    }
    
    else if (minutoExacto >= 20 && minutoExacto <= 29) {
        [0, 1, ,3, 5, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    }
    
    else if (minutoExacto >= 30 && minutoExacto <= 39) {
        [0, 1, 3, 4, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    } 
    
    else if (minutoExacto >= 40 && minutoExacto <= 49) {
        [1, 2, 3, 4].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    } 
    
    else if (minutoExacto >= 50 && minutoExacto <= 59) {
        [0, 2, 3, 4, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    } 
    
    else {
        [0, 1, 2, 4, 5, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = "red");
    }
}
//minutosEnPantallaD()
//setInterval(minutosEnPantalla, 1000);


function minutosEnPantallaU() {
if ([1, 11, 21, 31, 41, 51].includes(minutoExacto)) {
    // Acción para los minutos 1, 11, 21, 31, 41, 51
    [1,4].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    
    else if ([2, 12, 22, 32, 42, 52].includes(minutoExacto)) {
        [0, 1, ,3, 5, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 

    else if ([3, 13, 23, 33, 43, 53].includes(minutoExacto)) {
    [0, 1, 3, 4, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    else if ([4, 14, 24, 34, 44, 54].includes(minutoExacto)) {
        [1, 2, 3, 4].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    else if ([5, 15, 25, 35, 45, 55].includes(minutoExacto)) {
        [0, 2, 3, 4, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    
    else if ([6, 16, 26, 36, 46, 56].includes(minutoExacto)) {
        [0, 2, 3, 4, 5, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    else if ([7, 17, 27, 37, 47, 57].includes(minutoExacto)) {
        [0, 1, 2, 4].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    
    else if ([8, 18, 28, 38, 48, 58].includes(minutoExacto)) {
        [0, 1, 2, 3, 4, 5, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    else if ([9, 19, 29, 39, 49, 59].includes(minutoExacto)) {
        [0, 1, 2, 3, 4, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
    } 
    else {
        [0, 1, 2, 4, 5, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = "red");
}
}

horasEnPantallaD()
horasEnPantallaU()

setInterval (function compararHora() {
    // Obtener la hora actual
    let horaActual = new Date().getHours();

    // Comprobar si la hora ha cambiado desde la última vez
    if (horaActual !== horaExacta) {
        // Realizar la acción cuando la hora cambie
        horaExacta = horaActual;
        resetear(segmentosHoraDecena)
        resetear(segmentosHoraUnidad)
        horasEnPantallaD()
        horasEnPantallaU()
        // Actualizar la variable horaExacta
        horaExacta = horaActual;
    }
} ,1000)

minutosEnPantallaD()//ejecutamos una vez cada funcion cuando la app es lanzada
minutosEnPantallaU()

setInterval (function compararMinuto() {
    // Obtener la hora actual
    let minutoActual = new Date().getMinutes();
    if (minutoActual !== minutoExacto) {// Comprobar si la hora ha cambiado desde la última vez
        minutoExacto = minutoActual;//actualizamos el valor de minuto actual
        resetear(segmentosMinutoDecena)//reseteamos los segmentos a apagados
        resetear(segmentosMinutoUnidad)
        minutosEnPantallaD()
        minutosEnPantallaU()
        minutoExacto = minutoActual;// Actualizar la variable horaExacta
    }
} ,1000)