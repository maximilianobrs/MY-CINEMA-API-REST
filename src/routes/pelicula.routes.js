import { Router } from "express";
import { getPelicula, postPelicula, putPelicula, deletePelicula } from "../controllers/Pelicula.js";

const router = Router();

router.get('/peliculas',getPelicula);
router.post('/peliculas',postPelicula);
router.put('/peliculas',putPelicula);
router.delete('/peliculas',deletePelicula);

export default router;