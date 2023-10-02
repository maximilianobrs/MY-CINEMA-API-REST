import { Router } from "express";
import { getSerie, getSeries, postSerie, putSerie, deleteSerie } from "../controllers/Serie.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/series/:id', getSerie);
router.get('/series', getSeries);
router.post('/series',  postSerie);
router.put('/series/:id',  putSerie);
router.delete('/series/:id',  deleteSerie);

export default router;