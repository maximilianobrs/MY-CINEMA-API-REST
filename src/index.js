import Express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';

import { PORT } from './configs/configs.js';
import db from './database/db.js';



//Ruta directorio actual.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Database
try {
    await db.sync({ force: false });
} catch (error) {
    console.log(error);
}

//Instancia app.
const app = Express();

app.listen(PORT, () => console.log(`Server arriba puerto ${PORT}`));