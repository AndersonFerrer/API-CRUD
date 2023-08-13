import express from 'express'
import morgan from 'morgan'

import indexRouter from './routes/index.routes.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import productRouter from './routes/product.routes.js'
import musicRouter from './routes/musicCard.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));
app.use(indexRouter)
app.use(productRouter)
app.use(musicRouter)

export default app