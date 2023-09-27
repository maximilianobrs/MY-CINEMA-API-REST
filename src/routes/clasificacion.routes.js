import { Router } from "express";
import { getClasificacion, postClasificacion, putClasificacion, deleteClasificacion } from "../controllers/Clasificacion.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/clasificaciones', getClasificacion);
router.post('/clasificaciones', auth, postClasificacion);
router.put('/clasificaciones/:id', auth, putClasificacion);
router.delete('/clasificaciones/:id', auth, deleteClasificacion);

export default router;