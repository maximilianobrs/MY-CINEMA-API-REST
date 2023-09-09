import { Router } from "express";
import { getSerie, postSerie, putSerie, deleteSerie } from "../controllers/Serie.js";

const router = Router();

router.get('/series',getSerie);
router.post('/series',postSerie);
router.put('/series',putSerie);
router.delete('/series',deleteSerie);

export default router;