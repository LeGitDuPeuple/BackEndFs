const mongoose = require("mongoose");

const adviceSchema = mongoose.Schema({
    id: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model("avis", adviceSchema);


// c'est grasse a mongoose qu'on crer le schema qui servira de base de donné. c'est une fonctionnalité mongoose 