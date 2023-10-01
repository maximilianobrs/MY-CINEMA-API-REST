import { Router } from "express";
import { getGenero, getGeneros, postGenero, putGenero, deleteGenero } from "../controllers/Genero.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/generos/:id', getGenero);
router.get('/generos', getGeneros);
router.post('/generos', auth, postGenero);
router.put('/generos/:id', auth, putGenero);
router.delete('/generos/:id', auth, deleteGenero);

export default router;