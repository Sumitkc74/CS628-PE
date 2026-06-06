const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  cookingTime: { type: String },
  servings: { type: String },
  category: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);