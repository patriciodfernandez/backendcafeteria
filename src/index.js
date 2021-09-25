import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import './database';
import productoRouter from './routes/producto.routes'

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))


app.set('port', process.env.PORT || 4000)


app.use('/api/cafeteria',productoRouter)

app.listen(app.get('port'), () => {
    // console.log(path.join(__dirname, '../public'))
    console.log('estoy escuchando el puerto ', +app.get('port'))
})