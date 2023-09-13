import { Router } from "express";
import { getEpisodio, postEpisodio, putEpisodio, deleteEpisodio } from "../controllers/Episodio.js";

const router = Router();

router.get('/Episodios',getEpisodio);
router.post('/Episodios',postEpisodio);
router.put('/Episodios/:id',putEpisodio);
router.delete('/Episodios/:id',deleteEpisodio);

export default router;