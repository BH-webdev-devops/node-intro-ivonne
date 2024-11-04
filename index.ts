import express, {Request, Response, NextFunction} from 'express'
import carRouter from './routes/carRouter'
import 'dotenv/config'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', carRouter)

const middleware = (req : Request, res : Response, next : NextFunction ) => {
    console.log(`Hello this is the middleware`)
    next()
}

const secondMiddleware = (req : Request, res : Response, next : NextFunction) => {
    console.log(`Second middleware`)
    next()
}

app.get(`/`, middleware, secondMiddleware, (req : Request, res: Response) => {
    res.send(`Welcome to our users API`)
})



app.listen(PORT, () => console.log(`Server is running on port 3002`))