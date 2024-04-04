const partidos = [
    {
        "id": 1,
        "equipos": {
            "local": "Alianza Lima",
            "visitante": "Fluminense"
        },
        "fecha": "03-04-2024",
        "hora": "19:30"
    },
    {
        "id": 2,
        "equipos": {
            "local": "Universitario",
            "visitante": "LDU"
        },
        "fecha": "04-04-2024",
        "hora": "21:30"
    },
    {
        "id": 3,
        "equipos": {
            "local": "Chancas",
            "visitante": "Sport Boys"
        },
        "fecha": "04-04-2024",
        "hora": "22:30"
    },
    {
        "id": 4,
        "equipos": {
            "local": "UCH",
            "visitante": "San Marcos DEP"
        },
        "fecha": "05-04-2024",
        "hora": "02:30"
    },
    {
        "id": 5,
        "equipos": {
            "local": "UCV",
            "visitante": "Milan"
        },
        "fecha": "05-04-2024",
        "hora": "12:30"
    },
    {
        "id": 6,
        "equipos": {
            "local": "Sport Cantolao",
            "visitante": "Bayer"
        },
        "fecha": "06-04-2024",
        "hora": "21:30"
    },
    {
        "id": 7,
        "equipos": {
            "local": "San Martin",
            "visitante": "PSG"
        },
        "fecha": "06-04-2024",
        "hora": "22:30"
    },
    {
        "id": 8,
        "equipos": {
            "local": "Alianza Lima",
            "visitante": "Real Madrid"
        },
        "fecha": "07-04-2024",
        "hora": "21:30"
    },
    {
        "id": 9,
        "equipos": {
            "local": "Perú",
            "visitante": "Mongolia"
        },
        "fecha": "08-04-2024",
        "hora": "21:30"
    },
    {
        "id": 10,
        "equipos": {
            "local": "San Marino",
            "visitante": "Alemania"
        },
        "fecha": "09-04-2024",
        "hora": "20:30"
    },
    {
        "id": 11,
        "equipos": {
            "local": "Cristal",
            "visitante": "Psiqui"
        },
        "fecha": "10-04-2024",
        "hora": "17:30"
    },
    {
        "id": 12,
        "equipos": {
            "local": "Liverpool",
            "visitante": "Caimanes"
        },
        "fecha": "11-04-2024",
        "hora": "15:30"
    },
    {
        "id": 13,
        "equipos": {
            "local": "Botafogo",
            "visitante": "Real Atletico Mineros"
        },
        "fecha": "13-04-2024",
        "hora": "8:30"
    }
];

const respuestas = [];
const resultados = [
    {
        "id": 1,
        "value": "E"
    },
    {
        "id": 2,
        "value": "L"
    },
    {
        "id": 3,
        "value": "E"
    },
    {
        "id": 4,
        "value": "V"
    },
    {
        "id": 5,
        "value": "L"
    },
    {
        "id": 6,
        "value": "L"
    },
    {
        "id": 7,
        "value": "L"
    },
    {
        "id": 8,
        "value": "E"
    },
    {
        "id": 9,
        "value": "V"
    },
    {
        "id": 10,
        "value": "V"
    },
    {
        "id": 11,
        "value": "V"
    },
    {
        "id": 12,
        "value": "V"
    },
    {
        "id": 13,
        "value": "V"
    }
];

function setPartidos(){
    const tableroElement = document.getElementById("tablero");
    let contenido = "";
    partidos.forEach(function(partido) { 
        const template = `
            <div class="partido">
                <div class="datapartido">
                    <h3>${partido.equipos.local} vs ${partido.equipos.visitante}</h3>
                    <p>${partido.fecha} - ${partido.hora}</p>
                </div>
                <div class="actions" data-id="${partido.id}">
                    <div class="action actionLocal">L</div>  
                    <div class="action actionEmpate">E</div>  
                    <div class="action actionVisitante">V</div>  
                </div>
            </div>
        `;
        contenido = contenido + template;
    });
    tableroElement.innerHTML = contenido;
}

function buscarPorID(id) {
    // Por cada objeto en el array
    for (let respuesta of respuestas) {
        // Si el ID del objeto es igual al ID que estamos buscando
        if (respuesta.id === id) {
            // Devolver ese objeto
            return respuesta;
        }
    }
    // Si no se encuentra ningún objeto con el ID dado, devolver undefined
    return undefined;
}

function actionsButtons() {
    const actionLocal = document.querySelectorAll(".actionLocal");
    const actionEmpate = document.querySelectorAll(".actionEmpate");
    const actionVisitante = document.querySelectorAll(".actionVisitante");
    actionLocal.forEach(function(boton) {
        boton.addEventListener("click", function() {
            //seleccionar al padre
            const padre = this.parentNode;                        
            const id = padre.getAttribute("data-id");
            //logica visual
            const actionsButtons = padre.querySelectorAll('.action');                        
            actionsButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add("active");
            //parte logica
            //BUSCAR SI EL ID EXISTE EN EL ARRAY y reemplzarlo            
            const newRespuesta = new Object();
            newRespuesta.id = id;
            newRespuesta.value = "L";
            const respuestaExistente = buscarPorID(id);
            if (respuestaExistente) {
                respuestaExistente.value = newRespuesta.value;
            } else {
                //NO ENCUENTRA EL ID, LO CREO PE  
                respuestas.push(newRespuesta);
            }  
            console.log(respuestas);        
        });
    });
    actionEmpate.forEach(function(boton) {
        boton.addEventListener("click", function() {
            //seleccionar al padre
            const padre = this.parentNode;                        
            const id = padre.getAttribute("data-id");
            //logica visual
            const actionsButtons = padre.querySelectorAll('.action');                        
            actionsButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add("active");
            //parte logica
            //BUSCAR SI EL ID EXISTE EN EL ARRAY y reemplzarlo            
            const newRespuesta = new Object();
            newRespuesta.id = id;
            newRespuesta.value = "E";
            const respuestaExistente = buscarPorID(id);
            if (respuestaExistente) {
                respuestaExistente.value = newRespuesta.value;
            } else {
                //NO ENCUENTRA EL ID, LO CREO PE  
                respuestas.push(newRespuesta);
            }  
            console.log(respuestas);                
        });
    });
    actionVisitante.forEach(function(boton) {
        boton.addEventListener("click", function() {
            //seleccionar al padre
            const padre = this.parentNode;                        
            const id = padre.getAttribute("data-id");
            //logica visual
            const actionsButtons = padre.querySelectorAll('.action');                        
            actionsButtons.forEach(function(b) {
                b.classList.remove('active');
            });
            this.classList.add("active");
            //parte logica
            //BUSCAR SI EL ID EXISTE EN EL ARRAY y reemplzarlo            
            const newRespuesta = new Object();
            newRespuesta.id = id;
            newRespuesta.value = "V";
            const respuestaExistente = buscarPorID(id);
            if (respuestaExistente) {
                respuestaExistente.value = newRespuesta.value;
            } else {
                //NO ENCUENTRA EL ID, LO CREO PE  
                respuestas.push(newRespuesta);
            }  
            console.log(respuestas);                
        });
    });
}

function compararArrays(){
    let contadorCoincidencias = 0;
    respuestas.forEach(respuesta => {
        const id = respuesta.id;
        const value = respuesta.value;
        resultados.forEach(resultado => {
            if (id == resultado.id) {
                if (value == resultado.value) {
                    contadorCoincidencias++;
                }
            }
        });
    });
    return contadorCoincidencias;
}

const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function() {
    const coincidencias = compararArrays();
    let myicon = "question";
    if (coincidencias > 4) {
        myicon = "success";
    }
    if (coincidencias > 9) {
        myicon = "warning";
    }
    if (coincidencias == 13) {
        myicon = "error";
    }
    Swal.fire({
        title: "Tienes aciertos",
        text: "Tienes un total de " + coincidencias + " aciertos",
        icon: myicon
    });
});

setPartidos();
actionsButtons();