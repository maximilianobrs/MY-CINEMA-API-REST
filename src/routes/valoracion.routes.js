import { Router } from "express";
import { getValoracion, postValoracion, putValoracion, deleteValoracion } from "../controllers/Valoracion.js";

const router = Router();

router.get('/Valoraciones',getValoracion);
router.post('/Valoraciones',postValoracion);
router.put('/Valoraciones',putValoracion);
router.delete('/Valoraciones',deleteValoracion);

export default router;