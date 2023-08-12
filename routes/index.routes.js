import { Router } from "express";

const indexRouter = Router()
indexRouter.get('/', (req, res) => res.send('Hello world 3'))
indexRouter.get('/api', (req, res) => res.send('Hola api'))

export default indexRouter