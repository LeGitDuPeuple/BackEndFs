const mongoose = require("mongoose");
// on a installer le package uniqueVlidator pour permettre de ne pas avoir deux adresse miel en même temps  
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required : true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);