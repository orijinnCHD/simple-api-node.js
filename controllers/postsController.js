// controller c'est créer les route

const express = require('express');
const router = express.Router();
const {PostsModel} = require ('../models/postsModel');
const ObjectID = require('mongoose').Types.ObjectId;


// docs : les données
router.get('/',(req,res)=>{
    PostsModel.find((err,docs)=>{
        //console.log(docs); // voir les donnée du model en console log
        if(!err) 
            res.send(docs) // si il y a pas d'erreur tu envoie la visualisaiton des donnée sur navigateur
        else
            console.log("Error to get data  : " +err);
    })
})


// créer un CRUD

// post : ajouter les donnéess

router.post('/',(req,res)=>{
    // créer un nouveau post en fonction du modele de db
    console.log(req.body);
    const newRecord = PostsModel({
        author: req.body.author,
        message: req.body.message
        
    })

    newRecord.save((err,docs)=>{
        if(!err)
            res.send(docs)
    })
})


// update: put : modifier les donnée
// on modifie grace à l'id de objet
// on doit importer
// const ObjectID = require('mongoose').Types.ObjectId;
router.put("/:id",(req,res)=>{
    // si il y a pas id on sort de update
    if(!ObjectID.isValid(req.params.id))
        return res.statusCode(400).send("id unknown : " + req.params.id);

    const updateRecord ={
        author:req.body.author,
        message:req.body.message,
    }

    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set:updateRecord},
        {new:true},
        (err,docs)=>{
            if(!err)
                res.send(docs);
            else
                console.log("Update error : " + err);
        }
    )
})

//////////////delete/////////////////////////

router.delete("/:id",(req,res)=>{
    // si il y a pas id on sort de update
    if(!ObjectID.isValid(req.params.id))
        return res.statusCode(400).send("id unknown : " + req.params.id);

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err,docs)=>{
            if(!err) 
                res.send(docs);
            else
                console.log("Delete error : " + err);
        }
    );
})

module.exports=router;