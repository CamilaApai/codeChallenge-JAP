document.getElementById("form").addEventListener("submit", function(subir) {
    subir.preventDefault();
});

const data = { 
    nombre: document.getElementById("nombre").value,
    apellido: parseInt(document.getElementById("apellido").value),
    fecha: document.getElementById("fecha").value}

fetch('https://jsonplaceholder.typicode.com/users', { 
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' } })
.then(response => {return response.json()})
.then(data => console.log("Datos:", data))
.catch(error => console.error("Hubo un error", error))