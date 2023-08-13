import { Router } from "express";
import { createMusicCard, getMusicCard, getMusicCards } from "../controllers/musicCard.controller.js";

const musicRouter = Router()

musicRouter.get('/music', getMusicCards)
musicRouter.get('/music/:id', getMusicCard)
musicRouter.post('/music', createMusicCard)
musicRouter.delete('/music/:id', (req, res) => res.send('Bienvenido a eliminar'))
musicRouter.put('/music/:id', (req, res) => res.send('Actualizando'))

export default musicRouter