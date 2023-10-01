import { Router } from "express";
import { getTemporada, getTemporadas, postTemporada, putTemporada, deleteTemporada } from "../controllers/Temporada.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/temporadas/:id', getTemporada);
router.get('/temporadas', getTemporadas);
router.post('/temporadas', auth, postTemporada);
router.put('/temporadas/:id', auth, putTemporada);
router.delete('/temporadas/:id', auth, deleteTemporada);

export default router;