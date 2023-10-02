import { Router } from "express";
import { getValoracion, getValoraciones, postValoracion, putValoracion, deleteValoracion } from "../controllers/Valoracion.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/Valoraciones/:id', getValoracion);
router.get('/Valoraciones', getValoraciones);
router.post('/Valoraciones',  postValoracion);
router.put('/Valoraciones/:id',  putValoracion);
router.delete('/Valoraciones/:id',  deleteValoracion);

export default router;