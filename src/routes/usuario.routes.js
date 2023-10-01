import { Router } from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/Usuario.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/usuarios/:id', auth, getUsuario);
router.get('/usuarios', auth, getUsuario);
router.post('/usuarios', postUsuario);
router.put('/usuarios/:id', auth, putUsuario);
router.delete('/usuarios/:id', auth, deleteUsuario);

export default router;