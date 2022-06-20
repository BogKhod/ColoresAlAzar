const generar = document.getElementById('generar');
const reset = document.getElementById('reset');
const mostrarColor = document.querySelector('.colorHex');

const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function numeroAzar() {
    return Math.floor(Math.random() * hex.length);
}

document.addEventListener('click', n => {
    if (n.target === generar) {
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += hex[numeroAzar()];
        }

        mostrarColor.innerHTML = color;
        document.body.style.background = color;
    }

    if (n.target === reset) {
        mostrarColor.innerHTML = "#2E2F30";
        document.body.style.background = "#2E2F30";
    }
});

// SKOROKHOD