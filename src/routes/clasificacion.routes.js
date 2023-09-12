import { Router } from "express";
import { getClasificacion, postClasificacion, putClasificacion, deleteClasificacion } from "../controllers/Clasificacion.js";

const router = Router();

router.get('/clasificaciones',getClasificacion);
router.post('/clasificaciones',postClasificacion);
router.put('/clasificaciones/:id',putClasificacion);
router.delete('/clasificaciones/:id',deleteClasificacion);

export default router;