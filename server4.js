const express=require('express')
const cors=require('cors')
const app=express()
const todo=require('./routes/routes4')

app.use(cors())

app.use('/route1',todo)

app.listen(3336,()=>console.log("server started"))