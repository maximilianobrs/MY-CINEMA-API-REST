import { Router } from "express";
import { getActor, postActor, putActor, deleteActor } from "../controllers/Actor.js";

const router = Router();

router.get('/actores',getActor);
router.post('/actores',postActor);
router.put('/actores/:id',putActor);
router.delete('/actores/:id',deleteActor);

export default router;