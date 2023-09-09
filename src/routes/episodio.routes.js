import { Router } from "express";
import { getEpisodio, postEpisodio, putEpisodio, deleteEpisodio } from "../controllers/Episodio.js";

const router = Router();

router.get('/Episodios',getEpisodio);
router.post('/Episodios',postEpisodio);
router.put('/Episodios',putEpisodio);
router.delete('/Episodios',deleteEpisodio);

export default router;