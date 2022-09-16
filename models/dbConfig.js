const mongoose = require('mongoose');

//connecter à notre base de donnée
mongoose.connect(
    "mongodb://localhost:27017/node-api",
    // faut mettre ça absolument
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if(!err)
            console.log("Mongodb connected");
        else
            console.log("Connection error :" + err);
    }
    
)