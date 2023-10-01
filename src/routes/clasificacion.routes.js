import { Router } from "express";
import { getClasificacion, getClasificaciones, postClasificacion, putClasificacion, deleteClasificacion } from "../controllers/Clasificacion.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/clasificaciones/:id', getClasificacion);
router.get('/clasificaciones', getClasificaciones);
router.post('/clasificaciones', auth, postClasificacion);
router.put('/clasificaciones/:id', auth, putClasificacion);
router.delete('/clasificaciones/:id', auth, deleteClasificacion);

export default router;