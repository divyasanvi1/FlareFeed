import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(`app is not listening to MONGO_DB`,error)
        throw error;
      })
    app.listen(process.env.PORT ||8000, ()=>{
        console.log(`app is listening on${process.env.PORT}`)
     })
})
.catch((err)=>{
    console.log(`MONGO_DB connection failed!!!`,err)
})