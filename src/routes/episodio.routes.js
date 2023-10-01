import { Router } from "express";
import { getEpisodio, getEpisodios, postEpisodio, putEpisodio, deleteEpisodio } from "../controllers/Episodio.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/Episodios/:id', getEpisodio);
router.get('/Episodios', getEpisodios);
router.post('/Episodios', auth, postEpisodio);
router.put('/Episodios/:id', auth, putEpisodio);
router.delete('/Episodios/:id', auth, deleteEpisodio);

export default router;