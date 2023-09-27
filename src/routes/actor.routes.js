import { Router } from "express";
import { getActor, postActor, putActor, deleteActor } from "../controllers/Actor.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/actores', getActor);
router.post('/actores', auth, postActor);
router.put('/actores/:id', auth, putActor);
router.delete('/actores/:id', auth, deleteActor);

export default router;