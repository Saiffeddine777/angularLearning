const express = require("express")
const app= express()
const cors= require("cors")
const { clientRouter } = require("./routers/client")
app.use([express.json(),cors()])


app.use('/api/client',clientRouter)



app.listen(5000,()=>{
    console.log("listening on 5000")
})