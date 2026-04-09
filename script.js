// En JS no usamos interfaces, usamos objetos directamente
const datos = {
    nombre: "Fabio Navarro",
    rol: "Analista de Sistemas"
};

// Función para saludar (quitamos el ": void")
function saludar() {
    alert(`¡Hola! Estás viendo el CV de ${datos.nombre}, ${datos.rol}.`);
}

// Lógica para el título
const titulo = document.querySelector('h1');

if (titulo) {
    // Cambiamos el cursor para que el usuario sepa que puede hacer clic
    titulo.style.cursor = 'pointer';

    titulo.addEventListener('click', () => {
        // Generamos un color aleatorio para que sea más divertido (la "monería")
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        titulo.style.color = randomColor;
        
        console.log("¡Color cambiado a: " + randomColor);
    });
}