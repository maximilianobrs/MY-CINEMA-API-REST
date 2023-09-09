import { Router } from "express";
import { getComentario, postComentario, putComentario, deleteComentario } from "../controllers/Comentario.js";

const router = Router();

router.get('/comentarios',getComentario);
router.post('/comentarios',postComentario);
router.put('/comentarios',putComentario);
router.delete('/comentarios',deleteComentario);

export default router;