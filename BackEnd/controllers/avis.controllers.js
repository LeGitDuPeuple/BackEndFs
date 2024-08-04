const AdviceModel = require("../models/avis.model");


module.exports.getAdvice  = async (req, res) => {
    delete req.body._id;
    const posts = await AdviceModel.find();
    res.status(200).json(posts);
}

module.exports.setAdvice = async (req, res) => {
    if (!req.body.description) {
        return res.status(400).json({ message: "Merci d'ajouter un avis" });
    }

    try {
        const post = await AdviceModel.create({
            id: req.body.id,
            description: req.body.description
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de votre avis" });
    }
};


module.exports.deleteAdvice = async (req, res) => {
    const post = await AdviceModel.findById(req.params.id);

    if (!post) {
        return res.status(400).json({ message: "Ce post n'existe pas" });
    }
    
    await AdviceModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post supprimé id : " + req.params.id });
}

module.exports.updateAdvice = async (req, res) => {
    
        const post = await AdviceModel.findById(req.params.id)
    
    // le parametre du if stipule que si post est negative (false), alors il joue la fonctione suivante
        if (!post) {
         res.status(400).json({message:" ce post existe pas"});
        }
    
        const updatePost = await AdviceModel.findByIdAndUpdate(
            post,
            req.body,
            {new: true}
        )
       res.status(200).json(updatePost);
    };    
