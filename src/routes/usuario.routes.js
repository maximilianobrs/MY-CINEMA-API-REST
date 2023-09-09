import { Router } from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/Usuario.js";

const router = Router();

router.get('/usuarios',getUsuario);
router.post('/usuarios',postUsuario);
router.put('/usuarios',putUsuario);
router.delete('/usuarios',deleteUsuario);

export default router;