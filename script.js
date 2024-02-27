//colores de los segmentos
const segmentoApagado = "#080808";
const segmentoEncendido = "ff0000";

// Función para cambiar el bcolor de los puntos cada segundo
function cambiarColor() {
    let puntos = document.getElementsByClassName("puntos");
    let colorActual = segmentoEncendido; // Color inicial

    setInterval(function() {
        // Cambia entre los dos colores
        if (colorActual === "#f00") {
            colorActual = "#080808";
        } else {
            colorActual = "#f00";
        }

        // Aplica el nuevo color de fondo a todos los elementos con la clase "puntos"
        for (let i = 0; i < puntos.length; i++) {
            puntos[i].style.backgroundColor = colorActual;
        }
    }, 1000); // Cambia cada segundo
}
// Llama a la función para iniciar el cambio de color
cambiarColor();

// Reloj

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

//programamos cada hora

function unaHora(){//01:00
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[4].style.backgroundColor = segmentoEncendido;
}

function dosHoras(){//02:00
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado
    segmentosHoraUnidad[4].style.backgroundColor = segmentoApagado
}

function tresHoras() {
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado
}

const cuatroHoras = () => {
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
};

const cincoHoras = () => {
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
}

const seisHoras = () => {
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[1].style.backgroundColor = segmentoApagado;
}

const sieteHoras = () => {
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
}

const ochoHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
}

const nueveHoras = () => {
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[2].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
}

const diezHoras = () => {
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
}

const onceHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
    console.log("huevos")
}

const doceHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado
    segmentosHoraUnidad[4].style.backgroundColor = segmentoApagado
}

const treceHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado
}

const catorceHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
}

const quinceHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
}

dieciseisHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[1].style.backgroundColor = segmentoApagado;
}

diecisieteHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
}

dieciochoHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
}

diecinueveHoras = () => {
    segmentosHoraDecena[0].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[5].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[6].style.backgroundColor = segmentoApagado;
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido;
    segmentosHoraDecena[4].style.backgroundColor = segmentoEncendido;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
}

veinteHoras = () => {
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[4].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[3].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
}

veintiunHoras = () => {
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[4].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[3].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido
    segmentosHoraUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosHoraUnidad[6].style.backgroundColor = segmentoApagado;
}

function veintidosHoras(){
    segmentosHoraDecena[2].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[4].style.backgroundColor = segmentoApagado
    segmentosHoraDecena[0].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[1].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[3].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[5].style.backgroundColor = segmentoEncendido
    segmentosHoraDecena[6].style.backgroundColor = segmentoEncendido
    segmentosHoraUnidad[2].style.backgroundColor = segmentoApagado
    segmentosHoraUnidad[4].style.backgroundColor = segmentoApagado
}

veintitresHoras = () => {
    // Enciende todos los segmentos de ambas unidades de hora
    for (let i = 0; i < 7; i++) {
        segmentosHoraDecena[i].style.backgroundColor = segmentoEncendido;
        segmentosHoraUnidad[i].style.backgroundColor = segmentoEncendido;
    }
    
    // Apaga los segmentos no necesarios en la decena de hora
    [2, 4].forEach(index => segmentosHoraDecena[index].style.backgroundColor = segmentoApagado);

    // Apaga los segmentos no necesarios en la unidad de hora
    [2, 5,].forEach(index => segmentosHoraUnidad[index].style.backgroundColor = segmentoApagado);
};

veinticuatroHoras = () => {
    // Enciende todos los segmentos de ambas unidades de hora
    for (let i = 0; i < 7; i++) {
        segmentosHoraDecena[i].style.backgroundColor = segmentoEncendido;
        segmentosHoraUnidad[i].style.backgroundColor = segmentoEncendido;
    }
    
    // Apaga el tercer segmento de la decena de hora
    segmentosHoraDecena[3].style.backgroundColor = segmentoApagado;
    // Apaga el tercer segmento de la unidad de hora
    segmentosHoraUnidad[3].style.backgroundColor = segmentoApagado;
};


function horaEnPantalla(){
    let ahora = new Date();
    let horaExacta = ahora.getHours();
    //console.log("hora")

    switch (horaExacta) {
        case 1:
            unaHora()
            break;
        case 2:
            dosHoras()
            break;
        case 3:
            tresHoras()
            break;
        case 4:
            cuatroHoras()
            break;
        case 5:
            cincoHoras()
            break;
        case 6:
            seisHoras()
            break;
        case 7:
            sieteHoras()
            break;
        case 8:
            ochoHoras()
            break;
        case 9:
            nueveHoras()
            break;
        case 10:
            diezHoras()
            break;
        case 11:
            onceHoras()
            break;
        case 12:
            doceHoras()
            break;
        case 13:
            treceHoras()
            break;
        case 14:
            catorceHoras()
            break;
        case 15:
            quinceHoras()
            break;
        case 16:
            dieciseisHoras()
            break;
        case 17:
            diecisieteHoras()
            break;
        case 18:
            dieciochoHoras()
            break;
        case 19:
            diecinueveHoras()
            break;
        case 20:
            veinteHoras()
            break;
        case 21:
            veintiunHoras()
            break;
        case 22:
            veintidosHoras()
            break;
        case 23:
            veintitresHoras()
            break;
    
        default:veinticuatroHoras()
            break;
    }
}

setInterval(horaEnPantalla, 1000);

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

ochosochos = () => {
    segmentosHoraDecena.forEach(elemento => {
        elemento.style.backgroundColor = "segmentoEncendido";
    });
    segmentosHoraUnidad.forEach(elemento => {
        elemento.style.backgroundColor = "segmentoEncendido";
    });
    segmentosMinutoDecena.forEach(elemento => {
        elemento.style.backgroundColor = "segmentoEncendido";
    });
    segmentosMinutoUnidad.forEach(elemento => {
        elemento.style.backgroundColor = "segmentoEncendido";
    });
    
}
//ochosochos()

cerominutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
}

unMinuto = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

dosMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[4].style.backgroundColor = segmentoApagado
}

tresMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado
}

cuatroMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

cincoMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

seisMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
}

sieteMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

ochoMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
}

nueveMinutos = () => {
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

diezMinutos = () => {
    // Enciende todos los segmentos de ambas unidades de Minutos
    for (let i = 0; i < 7; i++) {
        segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        segmentosMinutoUnidad[i].style.backgroundColor = segmentoEncendido;
    }
    
    // Apaga los segmentos no necesarios en la decena de minuto
    [0, 2, 3, 5, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);

    // Apaga los segmentos no necesarios en la unidad de minuto
    [3].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = segmentoApagado);
};

onceMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

doceMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[4].style.backgroundColor = segmentoApagado
}

treceMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado
}

catorceMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

quinceMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

dieciseisMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
}

diecisieteMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

dieciochoMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
}

diecinueveMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

veinteMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
}

veintiunMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

veintidosMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[4].style.backgroundColor = segmentoApagado
}

veintitresMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado
}

veinticuatroMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

veinticincoMinutos = () => {
    // Enciende todos los segmentos de ambas unidades de Minutos
    for (let i = 0; i < 7; i++) {
        segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        segmentosMinutoUnidad[i].style.backgroundColor = segmentoEncendido;
    }
    
    // Apaga los segmentos no necesarios en la decena de minuto
    [2, 4].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);

    // Apaga los segmentos no necesarios en la unidad de minuto
    [1, 5].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = segmentoApagado);
}

veintiseisMinutos = () => {
    // Enciende todos los segmentos de ambas unidades de Minutos
    for (let i = 0; i < 7; i++) {
        segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        segmentosMinutoUnidad[i].style.backgroundColor = segmentoEncendido;
    }
    
    // Apaga los segmentos no necesarios en la decena de minuto
    [2, 4].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);

    // Apaga los segmentos no necesarios en la unidad de minuto
    [1].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = segmentoApagado);
}

veintisieteMinutos = () => {
    // Enciende todos los segmentos de ambas unidades de Minutos
    for (let i = 0; i < 7; i++) {
        segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        segmentosMinutoUnidad[i].style.backgroundColor = segmentoEncendido;
    }
    
    // Apaga los segmentos no necesarios en la decena de minuto
    [2, 4].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);

    // Apaga los segmentos no necesarios en la unidad de minuto
    [2, 3, 5, 6].forEach(index => segmentosMinutoUnidad[index].style.backgroundColor = segmentoApagado);
}

veintiochoMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
}

veintinueveMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[4].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

treintaMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
}

treintayunMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

treintaydosMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[4].style.backgroundColor = segmentoApagado
}

treintaytresMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado
}

treintaycuatroMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

treintaycincoMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

treintayseisMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
}

treintaysieteMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

treintayochoMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
}

treintaynueveMinutos = () => {
    segmentosMinutoDecena[2].style.backgroundColor = segmentoApagado
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

cuarentaMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
}

cuarentayunMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

cuarentaydosMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[4].style.backgroundColor = segmentoApagado
}

cuarentaytresMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado
}

cuarentaycuatroMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

cuarentaycincoMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

cuarentayseisMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
}

cuarentaysieteMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

cuarentayochoMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
}

cuarentaynueveMinutos = () => {
    segmentosMinutoDecena[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[6].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

cincuentaMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
}

cincuentayunMinuto = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

cincuentaydosMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[4].style.backgroundColor = segmentoApagado
}

cincuentaytresMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado
}

cincuentaycuatroMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[0].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}

cincuentaycincoMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

cincuentayseisMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[1].style.backgroundColor = segmentoApagado;
}

cincuentaysieteMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[2].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[3].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[6].style.backgroundColor = segmentoApagado;
}


cincuentayochoMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
}

cincuentaynueveMinutos = () => {
    segmentosMinutoDecena[1].style.backgroundColor = segmentoApagado;
    segmentosMinutoDecena[5].style.backgroundColor = segmentoApagado;
    segmentosMinutoUnidad[5].style.backgroundColor = segmentoApagado;
}

/*function minutosEnPantalla (){
    let ahora = new Date()
    let minutoExacto = ahora.getMinutes();
    //console.log("minuto")

    /*switch (minutoExacto) {
        case 1:
            unMinuto()
            minutosEnPantalla();
            break;
        case 2:
            dosMinutos()
            break;
        case 3:
            ochosochos()
            tresMinutos()
            break;
        case 4:
            ochosochos()
            cuatroMinutos()
            break;
        case 5:
            cincoMinutos()
            break;
        case 6:
            seisMinutos()
            break;
        case 7:
            sieteMinutos()
            break;
        case 8:
            ochoMinutos()
            break;
        case 9:
            nueveMinutos()
            break;
        case 10:
            diezMinutos()
            break;
        case 11:
            onceMinutos()
            break;
        case 12:
            doceMinutos()
            break;
        case 13:
            treceMinutos()
            break;
        case 14:
            catorceMinutos()
            break;
        case 15:
            quinceMinutos()
            break;
        case 16:
            dieciseisMinutos()
            break;
        case 17:
            diecisieteMinutos()
            break;
        case 18:
            dieciochoMinutos()
            break;
        case 19:
            diecinueveMinutos()
            break;
        case 20:
            veinteMinutos()
            break;
        case 21:
            veintiunMinutos()
            break;
        case 22:
            veintidosMinutos()
            break;
        case 23:
            veintitresMinutos()
            break;
        case 24:
            veinticuatroMinutos()
            break;
        case 25:
            veinticuatroMinutos()
            break;
        case 26:
            veintiseisMinutos()
            break;
        case 27:
            veintisieteMinutos()
            break;
        case 28:
            veintiochoMinutos()
            break;
        case 29:
            veintinueveMinutos()
            break;
        case 30:
            treintaMinutos()
            break;
        case 31:
            treintayunMinutos()
            break;
        case 32:
            treintaydosMinutos()
            break;
        case 33:
            treintaytresMinutos()
            break;
        case 34:
            treintaycuatroMinutos()
            break;
        case 35:
            treintaycincoMinutos()
            break;
        case 36:
            treintayseisMinutos()
            break;
        case 37:
            treintaysieteMinutos()
            break;
        case 38:
            treintayochoMinutos()
            break;
            case 39:
            treintaynueveMinutos()
            break;
        case 40:
            cuarentaMinutos()
            break;
        case 41:
            cuarentayunMinutos()
            break;
        case 42:
            cuarentaydosMinutos()
            break;
        case 43:
            cuarentaytresMinutos()
            break;
        case 44:
            cuarentaycuatroMinutos()
            break;
        case 45:
            cuarentaycincoMinutos()
            break;
        case 46:
            cuarentayseisMinutos()
            break;
        case 47:
            cuarentaysieteMinutos()
            break;
        case 48:
            cuarentayochoMinutos()
            break;
        case 49:
            cuarentaynueveMinutos()
            break;
        case 50:
            cincuentaMinutos()
            break;
        case 51:
            cincuentayunMinuto()
            break;
        case 52:
            cincuentaydosMinutos()
            break;
        case 53:
            cincuentaytresMinutos()
            break;
        case 54:
            cincuentaycuatroMinutos()
            break;
        case 55:
            cincuentaycincoMinutos()
            break;
        case 56:
            cincuentayseisMinutos()
            break;
        case 57:
            cincuentaysieteMinutos()
            break;
        case 58:
            cincuentayochoMinutos()
            minutosEnPantalla()
            break;
        case 59:
            cincuentaynueveMinutos()
            minutosEnPantalla()
            break;

        default:cerominutos()
        minutosEnPantalla()
            break;
    }
    
    
}*/
function minutosEnPantalla (){

    let ahora = new Date();

    let minutoExacto = ahora.getMinutes();
    
    if (minutoExacto >= 1 && minutoExacto <= 9) {
        // Acción para los minutos del 0 al 9
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        // Apaga los segmentos no necesarios en la decena de minuto
        [3].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    } 
    
    else if (minutoExacto >= 10 && minutoExacto <= 19) {
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        [0, 2, 3, 5, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    }
    
    else if (minutoExacto >= 20 && minutoExacto <= 29) {
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        [2, 4].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    }
    
    else if (minutoExacto >= 30 && minutoExacto <= 39) {
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        [2, 5].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    } 
    
    else if (minutoExacto >= 40 && minutoExacto <= 49) {
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        [0, 5, 6].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    } 
    
    else if (minutoExacto >= 50 && minutoExacto <= 59) {
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        [1, 5].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    } 
    
    else {
        for (let i = 0; i < 7; i++) {
            segmentosMinutoDecena[i].style.backgroundColor = segmentoEncendido;
        }
        [3].forEach(index => segmentosMinutoDecena[index].style.backgroundColor = segmentoApagado);
    }
}
setInterval(minutosEnPantalla, 1000);
//setInterval(ochosochos, 1000);


//Ideas para optimizar
//mesclar las decenas en if´s
/*if (horaExacta <=19 && horaExacta >=10) {
    Aqui iria el codigo para siempre tener el uno en decenas
}*/