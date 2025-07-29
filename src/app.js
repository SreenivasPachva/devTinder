
// const {myFun} = require("./xyz.js")

// myFun(10,909)

const express = require("express");

const app = express();



app.listen(3000,()=>{

    console.log("server running successfully ")
})

app.get("/user",(req,res)=>{
    res.send({name:"Sreenivas",prof:"Software"})
})


app.post("/user",(req,res)=>{

    res.send("usr data submiited successfully")
})





// express = require("express")
// const app = express()

// app.listen(3000,)

//app.use((req,res)=>{
    //  res.send("hello fromm the server")
// })
