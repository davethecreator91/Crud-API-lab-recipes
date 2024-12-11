// imports
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const recipeModel = require('./models/recipes.js')
const pantryModel = require('./models/pantry.js')
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });
  
app.post('/myPantry', async (req,res) => {
    const createdRecipe = await RecipeModel.create(req.body);
    res.json(createdRecipe);
});

app.get('/myPantry', async (req, res) => {
    const foundRecipes = await RecipeModel.find();
    res.json(foundRecipes); 
});

app.put('/myPantry/:recipeId', async (req,res) => {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
        req.params.recipeId,
        req.body,
        {new: true});
    res.json(updatedRecipe);
    });

app.delete('/myPantry/:recipeId', async (req, res) => {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.recipeId);
    res.json(deletedRecipe);
});












app.listen(3001, () => {
    console.log('The express app is ready!');
  });