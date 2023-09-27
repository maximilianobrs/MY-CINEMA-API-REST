import { Router } from "express";
import { getEpisodio, postEpisodio, putEpisodio, deleteEpisodio } from "../controllers/Episodio.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/Episodios', getEpisodio);
router.post('/Episodios', auth, postEpisodio);
router.put('/Episodios/:id', auth, putEpisodio);
router.delete('/Episodios/:id', auth, deleteEpisodio);

export default router;