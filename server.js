import http from 'http';
import app from './src/pages/index.astro';

const port = process.env.PORT || 3000; // Usa el puerto asignado por Heroku o 3000 por defecto

const server = http.createServer(app.default);

server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});