import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import phoneRouter from './routes/phoneRoute.js'

// App Config
const app = express()

const port = process.env.PORT || 5000
connectDB()

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/phone',phoneRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=> console.log("Server started on PORT: "+port))