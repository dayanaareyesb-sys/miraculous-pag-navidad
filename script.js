
// =====================================
// 1. ANIMACIÓN DE NIEVE
// =====================================

const contenedorNieve = document.getElementById("nieve");

function crearNieve() {

    const copo = document.createElement("span");

    copo.classList.add("copo");

    copo.innerHTML = "❄";

    copo.style.left = Math.random() * 100 + "vw";

    copo.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    copo.style.opacity = Math.random();

    copo.style.fontSize =
        (Math.random() * 12 + 10) + "px";

    contenedorNieve.appendChild(copo);

    setTimeout(() => {
        copo.remove();
    }, 10000);
}

// Crear copos continuamente

setInterval(crearNieve, 250);


// =====================================
// 2. CONTROL DE MÚSICA
// =====================================

const musica = document.getElementById("musica");

const botonMusica = document.getElementById("botonMusica");

let reproduciendo = false;

botonMusica.addEventListener("click", function() {

    if (reproduciendo) {

        musica.pause();

        botonMusica.innerHTML = "♫ Música";

        reproduciendo = false;

    } else {

        musica.play()
            .then(() => {
                botonMusica.innerHTML = "❚❚ Pausar música";
                reproduciendo = true;
            })
            .catch(() => {
                botonMusica.innerHTML = "♫ Intentar reproducir";
            });

    }

});


// =====================================
// 3. MENSAJE EN CONSOLA
// =====================================

console.log("¡Bienvenido al especial de Navidad de Miraculous! 🐞");

// =====================================
// ANIMACIÓN DE ENTRADA DE PERSONAJES
// =====================================

const tarjetas = document.querySelectorAll(".personaje-card");

const observador = new IntersectionObserver((elementos) => {

    elementos.forEach((elemento) => {

        if (elemento.isIntersecting) {

            elemento.target.classList.add("visible");

            observador.unobserve(elemento.target);

        }

    });

}, {
    threshold: 0.15
});

tarjetas.forEach((tarjeta) => {
    observador.observe(tarjeta);
});

// =====================================
// GALERÍA: AMPLIAR FOTOGRAFÍAS
// =====================================

function abrirFoto(boton) {

    const visor = document.getElementById("visor");

    const imagen = document.getElementById("imagenAmpliada");

    const fotografia = boton.querySelector("img");

    imagen.src = fotografia.src;
    imagen.alt = fotografia.alt;

    visor.classList.add("activo");
}

function cerrarFoto() {

    const visor = document.getElementById("visor");

    visor.classList.remove("activo");

}

// Cerrar con la tecla ESC

document.addEventListener("keydown", function(evento) {

    if (evento.key === "Escape") {
        cerrarFoto();
    }

});


// =====================================
// ANIMACIÓN DE ENTRADA DE LA GALERÍA
// =====================================

const fotos = document.querySelectorAll(".foto-galeria");

const observadorFotos = new IntersectionObserver((elementos) => {

    elementos.forEach((elemento) => {

        if (elemento.isIntersecting) {

            elemento.target.classList.add("visible");

            observadorFotos.unobserve(elemento.target);

        }

    });

}, {
    threshold: 0.15
});

fotos.forEach((foto) => {
    observadorFotos.observe(foto);
});
