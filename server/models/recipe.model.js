// Importing Mongoose
const mongoose = require('mongoose');

const Ingredient = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ingredient name is required"]
    },
    quantity: {
        type: String,
        required: [true, "Ingredient quantity is required"]
    }
})

const Recipe = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "A photo is required to show off your recipe's results."]
    },
    name: {
        type: String,
        required: [true, "Recipe Name is Required"],
        minlength: [3, "Recipe name must be longer than 3 characters"]
    },
    category: {
        type: String,
        required: [true, "A category is required"],
    },
    instructions: {
        type: String,
        required: [true, "Instructions are required."],
        minlength: [5, "Instructions must be more than 5 characters"]
    },
    ingredients:[Ingredient]
    // ingredients: {
    //     type: Array,
    //     required: [true, "Ingredients are required"]
    // }
}, { timestamps: true })

Recipe.index({name: 'text', instructions: 'text'});

// Export Schema
module.exports.Recipe = mongoose.model('RecipeSchema', Recipe)
