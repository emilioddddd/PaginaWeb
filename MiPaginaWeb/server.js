// server.js
const express = require('express');
const app = express();
const port = 3000; // El puerto en el que se ejecutará el servidor

app.use(express.static('public')); // Carpeta donde estarán tus archivos públicos (HTML, CSS, JS)

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
