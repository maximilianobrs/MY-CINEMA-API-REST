import { Router } from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/Usuario.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/usuarios/:id',  getUsuario);
router.get('/usuarios',  getUsuario);
router.post('/usuarios', postUsuario);
router.put('/usuarios/:id',  putUsuario);
router.delete('/usuarios/:id',  deleteUsuario);

export default router;