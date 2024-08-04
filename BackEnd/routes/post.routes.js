const express = require("express");
const { setPost, getPosts, editPost, deletePost, LikePost, likePost, dislikePost } = require("../controllers/post.controllers");
const router = express.Router();

// ici on crée une route, si on fait un call de l'url /post, on recoit une res du message 
// app.get("/post", (req,res) => {
//     res.json({message: "voici les données !"})
// })

// ici on recupere la fonction avec la logique du get dirrectement depuis le controllers. On va faire ça pour toutes les routes utilisables 

router.get("/", getPosts);
router.post("/", setPost);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-post/:id",likePost );
router.patch("/dislike-post/:id", dislikePost);

module.exports = router; 
// (commenter moi le code pas commenter pour expliquer a quoi il sert simplement) 