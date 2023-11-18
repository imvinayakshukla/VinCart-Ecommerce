const mongoose=require('mongoose');

const url="mongodb+srv://vinayakshukla0786:Vinayak%40123@cluster0.fgqrxyu.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo=async ()=>{

    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB successfully")
    }
    catch(error)
    {
        console.log("Error connecting to MongoDB:",error)
    }
};

module.exports=connectToMongo;