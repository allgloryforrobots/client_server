import dotenv from 'dotenv' 
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const sequilize = require('./db.js')

import indexRouter from './routes/index.js'
import apiRouter from './routes/api.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

// app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use(express.json())


app.use('/', indexRouter)
app.use('/api', apiRouter)

app.set('view engine', 'ejs')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
})

const start = async () => {
    try {
        // await sequilize.authenticate()
        // await sequilize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

