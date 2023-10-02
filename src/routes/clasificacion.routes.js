import { Router } from "express";
import { getClasificacion, getClasificaciones, postClasificacion, putClasificacion, deleteClasificacion } from "../controllers/Clasificacion.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/clasificaciones/:id', getClasificacion);
router.get('/clasificaciones', getClasificaciones);
router.post('/clasificaciones',  postClasificacion);
router.put('/clasificaciones/:id',  putClasificacion);
router.delete('/clasificaciones/:id',  deleteClasificacion);

export default router;