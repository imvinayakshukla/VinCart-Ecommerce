const connectToMongo=require('./DB');
connectToMongo();

const express=require('express');
const app=express();
const port=5000;
app.use(express.json());



// app.use('/api/auth',require('./routes/auth'));



app.listen(port,()=>{
console.log("Server running at port:",port)
})