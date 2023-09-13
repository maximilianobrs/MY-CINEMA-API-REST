import { Router } from "express";
import { getSerie, postSerie, putSerie, deleteSerie } from "../controllers/Serie.js";

const router = Router();

router.get('/series',getSerie);
router.post('/series',postSerie);
router.put('/series/:id',putSerie);
router.delete('/series/:id',deleteSerie);

export default router;