// 1. Datos del usuario (Modelo de datos simple)
const datos = {
    nombre: "Fabio Navarro",
    rol: "Analista de Sistemas"
};

// 2. Función para saludar (se activa al hacer clic en la foto de Gumball)
function saludar() {
    alert(`¡Hola! Estás viendo el CV de ${datos.nombre}, ${datos.rol}.`);
}

// 3. Lógica del Modo Noche
const btnDarkMode = document.getElementById('btn-dark-mode');

// Verificamos que el botón exista para evitar errores en la consola
if (btnDarkMode) {
    btnDarkMode.addEventListener('click', () => {
        // Toggle de la clase .dark-mode en el body
        document.body.classList.toggle('dark-mode');

        // Cambiamos el texto y el emoji del botón
        if (document.body.classList.contains('dark-mode')) {
            btnDarkMode.textContent = '☀️ Modo Claro';
        } else {
            btnDarkMode.textContent = '🌙 Modo Noche';
        }
    });
}

// 4. Lógica del título (Cambio de color aleatorio)
const titulo = document.querySelector('h1');

if (titulo) {
    // Cambiamos el cursor a la manito para indicar interactividad
    titulo.style.cursor = 'pointer';

    titulo.addEventListener('click', () => {
        // Generamos un color hexadecimal aleatorio
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        titulo.style.color = randomColor;
        
        console.log("¡Color del título cambiado a: " + randomColor);
    });
}