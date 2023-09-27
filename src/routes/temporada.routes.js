import { Router } from "express";
import { getTemporada, postTemporada, putTemporada, deleteTemporada } from "../controllers/Temporada.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/temporadas',getTemporada);
router.post('/temporadas',auth ,postTemporada);
router.put('/temporadas/:id',auth ,putTemporada);
router.delete('/temporadas/:id',auth ,deleteTemporada);

export default router;