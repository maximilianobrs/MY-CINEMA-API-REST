import { Router } from "express";
import { getEpisodio, getEpisodios, postEpisodio, putEpisodio, deleteEpisodio } from "../controllers/Episodio.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/Episodios/:id', getEpisodio);
router.get('/Episodios', getEpisodios);
router.post('/Episodios',  postEpisodio);
router.put('/Episodios/:id',  putEpisodio);
router.delete('/Episodios/:id',  deleteEpisodio);

export default router;