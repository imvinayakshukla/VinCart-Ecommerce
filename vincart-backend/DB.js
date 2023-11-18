const mongoose=require('mongoose');

require('dotenv').config()

const connectToMongo=async ()=>{
   

    try{
        await mongoose.connect(process.env.url);
        console.log("Connected to MongoDB successfully")
    }
    catch(error)
    {
        console.log("Error connecting to MongoDB:",error)
    }
};

module.exports=connectToMongo;