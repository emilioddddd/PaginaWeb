// server.js
const express = require('express');
const app = express();
const port = 3000; // El puerto en el que se ejecutar� el servidor

app.use(express.static('public')); // Carpeta donde estar�n tus archivos p�blicos (HTML, CSS, JS)

app.listen(port, () => {
    console.log(`Servidor en ejecuci�n en http://localhost:${port}`);
});
