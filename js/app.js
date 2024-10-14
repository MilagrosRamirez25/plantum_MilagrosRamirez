let plantas = [];
let plantaActualIndex = -1; 

function agregarPlanta() {
    const nombre = document.getElementById("nombre_pl").value;
    const cuidados = document.getElementById("cuidado_pl").value;
    const riego = document.getElementById("riego_pl").value;
    const luz = document.getElementById("luz_pl").value;
    const fileInput = document.getElementById('archivo');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgURL = e.target.result;

            const planta = {
                nombre,
                cuidados,
                riego,
                luz,
                imagen: imgURL
            };

            if (plantaActualIndex === -1) { 
                plantas.push(planta);
            } else { 
                plantas[plantaActualIndex] = planta;
                plantaActualIndex = -1; 
            }

            mostrarPlanta(planta);
            limpiarFormulario();
        };
        reader.readAsDataURL(file);
    }
}

function mostrarPlanta(planta, index = plantas.length - 1) {
    const galeria = document.getElementById("galeria");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${planta.imagen}" alt="${planta.nombre}">
        <h3>${planta.nombre}</h3>
        <p>Cuidados: ${planta.cuidados}</p>
        <p>Riego: ${planta.riego}</p>
        <p>Luz: ${planta.luz}</p>
        <button onclick="cargarPlanta(${index})">Modificar</button>
    `;
    galeria.appendChild(card);
}

function cargarPlanta(index) {
    plantaActualIndex = index; 
    const planta = plantas[index];

    document.getElementById("nombre_pl").value = planta.nombre;
    document.getElementById("cuidado_pl").value = planta.cuidados;
    document.getElementById("riego_pl").value = planta.riego;
    document.getElementById("luz_pl").value = planta.luz;
    
}

function eliminar() {
    if (plantas.length > 0) {
        plantas.pop(); 
        actualizarGaleria();
    } else {
        alert("No hay plantas para eliminar.");
    }
}

function actualizarGaleria() {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = ''; 
    plantas.forEach((planta, index) => mostrarPlanta(planta, index)); 
}

function limpiarFormulario() {
    document.getElementById("nombre_pl").value = '';
    document.getElementById("cuidado_pl").value = '';
    document.getElementById("riego_pl").value = '';
    document.getElementById("luz_pl").value = '';
    document.getElementById('archivo').value = ''; 
}


const plantasEjemplo = [
    {
        nombre: "Sansevieria trifasciata ",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/1.webp" 
    },
    {
        nombre: "Zamioculcas zamiifolia ",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/2.jpg"
    },
    {
        nombre: "Aspidistra elatior",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/3.jpeg" 
    },
    {
        nombre: "Peperomia",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/4.jpeg" 
    },
    {
        nombre: "Aglaonema",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/5.jpg" 
    },
    {
        nombre: "Philodendron",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/6.jpeg" 
    },
    {
        nombre: "Monstera deliciosa",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/7.jpeg" 
    },
    {
        nombre: "Planta serpiente",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/8.webp" 
    },
    {
        nombre: "Lirio de la paz",
        cuidados: "Planta muy resistente, ideal para principiantes. Tolera la sequía y poca luz.",
        riego: "Riega cuando el sustrato esté completamente seco.",
        luz: "Prefiere lugares luminosos, pero tolera la sombra.",
        imagen: "assets/9.webp" 
    },
];


plantasEjemplo.forEach(planta => {
    plantas.push(planta);
    mostrarPlanta(planta);
});
