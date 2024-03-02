import express from 'express'; // Importa el módulo express para crear el servidor web.
import { dirname, join } from 'path'; // Importa las funciones dirname y join del módulo path para manejar rutas de archivos.
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath del módulo url para convertir una URL en una ruta de archivo.

import indexRoutes from './routes/index.js'; // Importa las rutas definidas en el archivo index.js dentro de la carpeta routes.

const app = express(); // Crea una instancia de la aplicación Express.
const __dirname = dirname(fileURLToPath(import.meta.url)); // Obtiene el directorio actual utilizando el módulo path y la URL del módulo actual.


//console.log(join (__dirname, 'views'))
app.set('views', join(__dirname, 'views')); // Establece el directorio de vistas para el motor de plantillas EJS.
app.set('view engine', 'ejs'); // Establece el motor de plantillas EJS para renderizar las vistas.
app.use(indexRoutes); // Agrega las rutas definidas en indexRoutes al middleware de la aplicación.

app.use(express.static(join(__dirname, 'public'))); // Sirve archivos estáticos desde la carpeta public.

app.listen(3000); // Escucha las solicitudes en el puerto 3000.
console.log('Server is listening on port', 3000); // Muestra un mensaje en la consola cuando el servidor se inicia correctamente.
