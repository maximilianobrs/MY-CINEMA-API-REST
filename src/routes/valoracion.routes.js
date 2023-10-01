import { Router } from "express";
import { getValoracion, getValoraciones, postValoracion, putValoracion, deleteValoracion } from "../controllers/Valoracion.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/Valoraciones/:id', getValoracion);
router.get('/Valoraciones', getValoraciones);
router.post('/Valoraciones', auth, postValoracion);
router.put('/Valoraciones/:id', auth, putValoracion);
router.delete('/Valoraciones/:id', auth, deleteValoracion);

export default router;