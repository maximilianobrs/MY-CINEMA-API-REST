import { Router } from "express";
import { getPelicula, getPeliculas, postPelicula, putPelicula, deletePelicula } from "../controllers/Pelicula.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/peliculas/:id', getPelicula);
router.get('/peliculas', getPeliculas);
router.post('/peliculas', auth, postPelicula);
router.put('/peliculas/:id', auth, putPelicula);
router.delete('/peliculas/:id', auth, deletePelicula);

export default router;