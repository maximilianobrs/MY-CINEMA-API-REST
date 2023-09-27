import { Router } from "express";
import { getValoracion, postValoracion, putValoracion, deleteValoracion } from "../controllers/Valoracion.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/Valoraciones',getValoracion);
router.post('/Valoraciones',auth ,postValoracion);
router.put('/Valoraciones/:id',auth ,putValoracion);
router.delete('/Valoraciones/:id',auth ,deleteValoracion);

export default router;