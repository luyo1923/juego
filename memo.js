// variables
let iconos = [] //donde se guardan los iconos
let selecciones = [] //donde se guardan temporalmente las selecciones de las tarjetas
generarTablero()
function cargarIconos() {
    // generar cada uno de los elementos de los iconos
    // cadena de texto comillas simples
    iconos = [
        '<i class="fas fa-star"></i>',
        '<i class="far fa-star"></i>',
        '<i class="fas fa-star-of-life"></i>',
        '<i class="fas fa-star-and-crescent"></i>',
        '<i class="fab fa-old-republic"></i>',
        '<i class="fab fa-galactic-republic"></i>',
        '<i class="fas fa-sun"></i>',
        '<i class="fas fa-stroopwafel"></i>',
        '<i class="fas fa-dice"></i>',
        '<i class="fas fa-chess-knight"></i>',
        '<i class="fas fa-chess"></i>',
        '<i class="fas fa-dice-d20"></i>',
    ]
}
function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    
    for (let i = 0; i < 24; i++) {
        // texto representativo
        // los iconos se comportan como texto
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        // si el contador "i" no es multiplo de 2 eliminar el primer elemento de iconos
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    // desorganizar las cartas
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
    ocultar();
}
function ocultar(){
    document.getElementById("nuevo-juego").style.display = "none";
}
// tarjetas seleccionadas y deseleccionadas
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}
function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        // si no coinciden giran
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            // si coinciden se cambia de color plum = "color ciruela"
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}