import { Router } from "express";
import { getEstadistica, postEstadistica, putEstadistica, deleteEstadistica } from "../controllers/Estadistica.js";

const router = Router();

router.get('/estadisticas',getEstadistica);
router.post('/estadisticas',postEstadistica);
router.put('/estadisticas',putEstadistica);
router.delete('/estadisticas',deleteEstadistica);

export default router;