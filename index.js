
const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./controllers/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// mongoose.set('useFindAndModify',false);


app.use(bodyParser.json());
// créer le serveur et le connecter
// paremetre au port 5500
//le domaine n'est pas definie dans en localhost
app.listen(5500,()=> console.log('server started:5500'));
console.log("Attente des requêtes au port 5500");

// permet de donner acces à notre api à tous le monde
// ici on limite l'accés au site cdpn.io

// si on voulait mettre l'acces à notre front
//app.use(cors({origin:'http://localhost:3000'}));
app.use(cors({origin:'https://cdpn.io'}));

// une fonction qui sera à affut des changements sur les requetes et les reponses sur le router
// on surveille si apps est sur le chemin "/" tu nous envoies sur postsRoutes
app.use('/posts',postsRoutes);
