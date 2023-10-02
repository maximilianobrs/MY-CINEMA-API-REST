import { Router } from "express";
import { getPelicula, getPeliculas, postPelicula, putPelicula, deletePelicula } from "../controllers/Pelicula.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/peliculas/:id', getPelicula);
router.get('/peliculas', getPeliculas);
router.post('/peliculas',  postPelicula);
router.put('/peliculas/:id',  putPelicula);
router.delete('/peliculas/:id',  deletePelicula);

export default router;