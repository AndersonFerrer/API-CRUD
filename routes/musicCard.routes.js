import { Router } from "express";
import { createMusicCard, deleteMusicCard, getMusicCard, getMusicCards } from "../controllers/musicCard.controller.js";

const musicRouter = Router()

musicRouter.get('/music', getMusicCards)
musicRouter.get('/music/:id', getMusicCard)
musicRouter.post('/music', createMusicCard)
musicRouter.delete('/music/:id', deleteMusicCard)
musicRouter.put('/music/:id', (req, res) => res.send('Actualizando'))

export default musicRouter