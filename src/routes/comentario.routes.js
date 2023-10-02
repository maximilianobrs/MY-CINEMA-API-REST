import { Router } from "express";
import { getComentario, getComentarios, postComentario, putComentario, deleteComentario } from "../controllers/Comentario.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/comentarios/:id', getComentario);
router.get('/comentarios', getComentarios);
router.post('/comentarios',  postComentario);
router.put('/comentarios/:id',  putComentario);
router.delete('/comentarios/:id',  deleteComentario);

export default router;