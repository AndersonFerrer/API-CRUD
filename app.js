import express from 'express'
import morgan from 'morgan'
import router from './routes/product.routes.js'
import indexRouter from './routes/index.routes.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));
app.use(indexRouter)
app.use(router)

export default app