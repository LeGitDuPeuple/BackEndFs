const PostModel = require("../models/post.model");


// fonction pour faire les get et recuperer dans la BDD avec (find)
module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
}

// fonction pour faire les post et crée un message dans la BDD 
module.exports.setPost = async (req, res) => {
    if (!req.body.message) {
        return res.status(400).json({ message: "Merci d'ajouter un message" });
    }

    try {
        const post = await PostModel.create({
            message: req.body.message,
            author: req.body.author
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du post" });
    }
}


module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id)

// le parametre du if stipule que si post est negative (false), alors il joue la fonctione suivante
    if (!post) {
     res.status(400).json({message:" ce post existe pas"});
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    )
   res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
        return res.status(400).json({ message: "Ce post n'existe pas" });
    }
    
    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post supprimé id : " + req.params.id });
}

module.exports.likePost= async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(req.params.id,
          {$addToSet: {Likers: req.body.userId} },
          {new: true}
      ).then((data) =>  res.status(200).send(data));
    

    }catch(error){
    res.status(400).json(error);
    }
};


module.exports.dislikePost= async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(req.params.id,
          {$pull: {Likers: req.body.userId} },
          {new: true}
      ).then((data) =>  res.status(200).send(data));
    

    }catch(error){
    res.status(400).json(error);
    }
};