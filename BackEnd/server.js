const express = require('express');
const connectDB = require("./config/db")
const dotenv = require("dotenv").config();
const app = express();
const postRoutes = require('./routes/post.routes');
const avisRoutes = require("./routes/avis.routes"); 
 



// Connexion à la base de donnéess
connectDB();

app.use(express.json());
// Cette ligne de code utilise le middleware "express.json()" pour analyser les requêtes entrantes avec un payload JSON.
// Cela permet de traiter les données JSON envoyées dans le corps des requêtes HTTP (généralement des requêtes POST ou PUT).
// Grâce à cette ligne, req.body contiendra un objet JavaScript représentant les données JSON reçues.

app.use(express.urlencoded({ extended: false }));
// Cette ligne de code utilise le middleware "express.urlencoded()" pour analyser les requêtes entrantes avec des données URL-encodées.
// L'option { extended: false } indique que le parsing doit utiliser la librairie querystring pour traiter les données encodées dans l'URL,
// ce qui signifie que les objets imbriqués ou les tableaux ne seront pas supportés (seules les paires clé-valeur simples seront analysées).
// Grâce à cette ligne, req.body contiendra un objet JavaScript représentant les données URL-encodées reçues.

app.use('/post', postRoutes);
// app.use('/postadvice', adviceRoute);*
app.use("/post/avis", avisRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
