import { Router } from "express";
import { getTemporada, postTemporada, putTemporada, deleteTemporada } from "../controllers/Temporada.js";

const router = Router();

router.get('/temporadas',getTemporada);
router.post('/temporadas',postTemporada);
router.put('/temporadas/:id',putTemporada);
router.delete('/temporadas/:id',deleteTemporada);

export default router;