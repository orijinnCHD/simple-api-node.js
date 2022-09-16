const mongoose = require("mongoose");


// en MAJ convention ecriture
// un modele de base de donnée
const PostsModel =mongoose.model(
    "node-api", // db database
    {
        author:{
            // les donnée
            type:String,
            required:true,

        },       
        message:{
            
            type:String,
            required:true,

        },       
        date:{
           
            type:Date,
            default:Date.now,

        }     
    },
    "posts"     // dans quel collection
)

// il faut exporter les models

module.exports ={ PostsModel };