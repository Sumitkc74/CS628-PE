import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeDetails from './RecipeDetails';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRecipeDeleted = deletedId => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe._id !== deletedId));
    setSelectedRecipeId(null);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/recipes`)
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="recipe-list-layout">
      <div className="recipe-list-header">
        <h2>All Recipes</h2>
      </div>
      <div className="recipe-card-row">
        {recipes.map(recipe => (
          <div
            key={recipe._id}
            className="recipe-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedRecipeId(recipe._id)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedRecipeId(recipe._id); }}
            style={{ cursor: 'pointer' }}
          >
            <h3>{recipe.name}</h3>
            <p>{recipe.category}</p>
          </div>
        ))}
      </div>
      {selectedRecipeId && (
        <div className="modal-overlay" onClick={() => setSelectedRecipeId(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <RecipeDetails
              id={selectedRecipeId}
              onClose={() => setSelectedRecipeId(null)}
              onDeleted={handleRecipeDeleted}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeList;