import bodyParser from "body-parser";
import express  from "express";
import cors from 'cors'
import mongoose from "mongoose";

const app = express()


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())


app.get('/', (req, res) => {
    res.send({
        name:"Joffrey",
        tel:76515792
    })
})

// db connection

const DATABASE_RUL = 'mongodb+srv://Joffrey:Joffrey579@mern-project1.u6legbd.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.PORT || 3001

mongoose.connect(DATABASE_RUL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(port, ()=>console.log(`running on port ${port}`)))
    .catch((error) => console.log(error.message));

