const mongoose = require("mongoose");


// la on definis le shema de notre base de donné. en l'occurence la on fabrique le modeles des message que ont va envoyé comme les tweet par exemple. Il faut un message, un autheur et la liste de ceux qui ont liker 
const postSchema = mongoose.Schema(
    {
    message: {type:String,required:true},
    author: {type:String,required:true},
    Likers: {type:[String]}
   },
    {
        // Permet de mettre leur a laquelle on fait le post et aussi l'heure à laquelle on le modifie 
        timestamps:  true,
    }
)

module.exports = mongoose.model("post", postSchema)