const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    name: String,
    ingredients: String,
    instructions: String,
    totalTime: Number,
    yield: Number
})

const RecipeModel = mongoose.model('RecipeModel', recipeSchema)

module.exports = recipeModel;