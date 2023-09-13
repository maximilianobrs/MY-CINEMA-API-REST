import { Router } from "express";
import { getPelicula, postPelicula, putPelicula, deletePelicula } from "../controllers/Pelicula.js";

const router = Router();

router.get('/peliculas',getPelicula);
router.post('/peliculas',postPelicula);
router.put('/peliculas/:id',putPelicula);
router.delete('/peliculas/:id',deletePelicula);

export default router;