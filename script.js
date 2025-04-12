let opciones = ["piedra", "papel", "tijera"];
let enlaces = document.querySelectorAll('button');
let resultado = document.getElementById('resultado');

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
        event.preventDefault();

        // Remover la clase 'active' de todos los enlaces
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase 'active' al enlace clicado
        enlace.classList.add('active');

        // Obtener la opción de la computadora dentro del evento click
        let pc = opciones[Math.floor(Math.random() * 3)];
        
        // Obtener el contenido del botón clicado
        let contenido = obtenerContenido(enlace.textContent.trim());

        if (contenido === 'piedra' && pc === 'papel' || 
            contenido === 'papel' && pc === 'tijera' ||
            contenido === 'tijera' && pc === 'piedra') {
            resultado.innerHTML = 'Perdiste! elegiste ' + contenido + ' y La computadora eligió ' + pc
            resultado.style.color = 'red'; // Cambia el color del mensaje a rojo
            resultado.style
        } else if (contenido === 'papel' && pc === 'piedra' || 
                   contenido === 'tijera' && pc === 'papel' ||
                   contenido === 'piedra' && pc === 'tijera') {
            resultado.innerHTML = 'Ganaste! elegiste ' + contenido + ' y La computadora eligió ' + pc
            resultado.style.color = 'green'; // Cambia el color del mensaje a verde
            resultado.style.fontSize = '2em'; // Cambia el tamaño de la fuente del mensaje
        } else if (contenido === pc) {
            resultado.innerHTML = 'Empate! elegiste ' + contenido + ' y La computadora eligió ' + pc
            resultado.style.color = 'blue'; // Cambia el color del mensaje a azul
            resultado.style.fontSize = '1.5em'; // Cambia el tamaño de la fuente del mensaje
        } else {
            alert('Opción no válida!');
        }
    });
});

function obtenerContenido(enlace) {
    switch (enlace) {
        case "piedra":
            return 'piedra';
        case "tijera":
            return 'tijera';
        case "papel":
            return 'papel';
        default:
            return 'opcion no valida';
    }
}
