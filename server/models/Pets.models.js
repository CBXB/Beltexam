const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true, "Name is required."],
        unique : [true],
        minlength: [3, "Name must be at least 3 characters or longer"] 
    },
    type:{
        type: String,
        required : [true, "Type is required."],
        minlength: [3, "Type must be at least 3 characters or longer"] 
    },
    description: {
        type: String,
        required : [true, "Description is required."],
        minlength: [3, "Description must be at least 3 characters or longer"] 
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    like: {
        type: Number,
    }
})
PetSchema.plugin(uniqueValidator,{ message :"Name duplicates."});

module.exports = mongoose.model("Pet", PetSchema);