import Express from 'express';
import { PORT } from './configs/configs.js';
import db from './db/db.js';

//Database

try {
    await db.sync({ force: false });
} catch (error) {
    console.log(error);
}

//Instancia app.
const app = Express();
app.use(Express.json());

import actorRoute from "./routes/actor.routes.js";
import clasificacionRoute from "./routes/clasificacion.routes.js";
import comentarioRoute from "./routes/comentario.routes.js";
import episodioRoute from "./routes/episodio.routes.js";
import generoRoute from "./routes/genero.routes.js";
import peliculaRoute from "./routes/pelicula.routes.js";
import serieRoute from "./routes/serie.routes.js";
import temporadaRoute from "./routes/temporada.routes.js";
import usuarioRoute from "./routes/usuario.routes.js";
import valoracionRoute from "./routes/valoracion.routes.js";


app.use('/api/v1',actorRoute);
app.use('/api/v1',clasificacionRoute);
app.use('/api/v1',comentarioRoute);
app.use('/api/v1',episodioRoute);
app.use('/api/v1',generoRoute);
app.use('/api/v1',peliculaRoute);
app.use('/api/v1',serieRoute);
app.use('/api/v1',temporadaRoute);
app.use('/api/v1',usuarioRoute);
app.use('/api/v1',valoracionRoute);

app.listen(PORT, () => console.log(`Server arriba puerto ${PORT}`));