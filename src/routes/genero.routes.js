import { Router } from "express";
import { getGenero, postGenero, putGenero, deleteGenero } from "../controllers/Genero.js";

const router = Router();

router.get('/generos', getGenero);
router.post('/generos', postGenero);
router.put('/generos', putGenero);
router.delete('/generos', deleteGenero);

export default router;