import { Router } from "express";
import { getComentario, postComentario, putComentario, deleteComentario } from "../controllers/Comentario.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/comentarios', getComentario);
router.post('/comentarios', auth, postComentario);
router.put('/comentarios/:id', auth, putComentario);
router.delete('/comentarios/:id', auth, deleteComentario);

export default router;