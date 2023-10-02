import { Router } from "express";
import { getActor, getActores, postActor, putActor, deleteActor } from "../controllers/Actor.js";
import { auth } from "../auth/auth.js";

const router = Router();

router.get('/actores/:id', getActor);
router.get('/actores', getActores);
router.post('/actores',  postActor);
router.put('/actores/:id',  putActor);
router.delete('/actores/:id',  deleteActor);

export default router;