import dotenv from 'dotenv' 
import express from "express"
// const sequilize = require('./db.js')

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use(express.json())

let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/users', usersRouter)

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

