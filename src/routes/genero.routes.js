import { Router } from "express";
import { getGenero, getGeneros, postGenero, putGenero, deleteGenero } from "../controllers/Genero.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/generos/:id', getGenero);
router.get('/generos', getGeneros);
router.post('/generos',  postGenero);
router.put('/generos/:id',  putGenero);
router.delete('/generos/:id',  deleteGenero);

export default router;