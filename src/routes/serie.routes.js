import { Router } from "express";
import { getSerie, getSeries, postSerie, putSerie, deleteSerie } from "../controllers/Serie.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/series/:id', getSerie);
router.get('/series', getSeries);
router.post('/series', auth, postSerie);
router.put('/series/:id', auth, putSerie);
router.delete('/series/:id', auth, deleteSerie);

export default router;