
// const {myFun} = require("./xyz.js")

// myFun(10,909)





// express = require("express")
// const app = express()

// app.listen(3000,)

//app.use((req,res)=>{
    //  res.send("hello fromm the server")
// })


// const express = require("express")

// const app = express()

// app.listen(8000,()=>{
//     console.log("Server Running Successfully ")
// })


// // if we use APP.USE in the first it always executed app.use

// // app.use("/user",(req,res)=>{
// //     res.send("global")
// // })





// // this GET method only handle get requests it will not other HTTP methods 
// /// when canning route /user


// app.get("/user/:UserID/:Password",(req,res)=>{

//     console.log(req.query)


//     console.log(req.params)
    


//     res.send({fname:"Sreenivas",lName:"Pachva"})

// })


// app.post("/user",(req,res)=>{

//     res.send("data saved successfully to the DB")

// })



// app.delete("/user",(req,res)=>{

//     res.send("data deleted successfully to the DB")

// })



// // user method can be used to do all HTTP methods like GET,POST,PUT

// app.use("/super",(req,res)=>{

//     res.send("First routing and Global one")

// })


// app.use("/test/2",(req,res)=>{

//     res.send("First test")

// })


// app.use("/test/2/23",(req,res)=>{

//     res.send("test 23")

// })





const express = require("express")

const app = express()

app.listen(9000,()=>{
    console.log("Server running successfully")
})


// app.get("/user",[(req,res,next)=>{ //res.send("sucess first rounte handler") 
//                                  // next()
//                                  },
//                 (req,res,next)=>{   //res.send("second first rounte handler") 
//                   next() }],
//                  (req,res,next)=>{ res.send(" third rounte handler") } 
// )





// writing auth route handler to supprot CRUDQ operations

// app.use("/user",(req,res,next)=>{


//     const token  = 'HHH'

//     const isAuthorized = token === 'HHHdd'

//     if(!isAuthorized)
//     {
//         res.status(401).send("UnAuthorized")
//     }
   
//     else{
//         next()
//     }

// })


const { authAdmin } = require("./middlewares/auth")

app.use("/user", authAdmin)


app.get("/user/getAllData",(req,res,next)=>{

res.send("All Data successfully fetched")
 
})


app.delete("/user/deleteAllData",(req,res,next)=>
{

    res.send("deleted Successfully")

})


app.put("/user/updateAllData",(req,res)=>{

    res.send("Udpated Data sucessfully")
})


app.post("/user/createAllData",(req,res)=>{


    res.send("created Data successfully")
})




