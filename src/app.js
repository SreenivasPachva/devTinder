
// const {myFun} = require("./xyz.js")

// myFun(10,909)

const express = require("express");

const app = express();


app.use("/test",(req,res)=>{
    res.send("hello from the server test")
})


app.use("/hello",(req,res)=>{
    res.send("hello Hello gelo")
})


app.use("/super",(req,res)=>{
    res.send("hello super")
})

app.listen(3000,()=>{

    console.log("server running successfully ")
})


// express = require("express")
// const app = express()

// app.listen(3000,)

//app.use((req,res)=>{
    //  res.send("hello fromm the server")
// })
