import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails({ id: propId, onClose, onDeleted }) {
  const { id: paramId } = useParams();
  const id = propId || paramId;
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`${process.env.REACT_APP_API_URL}/api/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/recipes/${id}`)
      .then(() => {
        if (onDeleted) onDeleted(id);
        else if (onClose) onClose();
        else navigate('/');
      })
      .catch(err => console.error(err));
  };

  if (!recipe) return <div className="recipe-details">Loading details…</div>;

  const ingredients = recipe.ingredients
    ? recipe.ingredients.split(/\r?\n|,\s*/).filter(Boolean)
    : [];

  let instructions = [];
  if (recipe.instructions) {
    const byParagraph = recipe.instructions.split(/\r?\n\s*\r?\n/).map(s => s.trim()).filter(Boolean);
    if (byParagraph.length > 1) instructions = byParagraph;
    else instructions = recipe.instructions.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  }

  return (
    <div className="recipe-details">
      <div className="details-header">
        <h2>{recipe.name}</h2>
        <div className="details-meta">
          <span className="pill">{recipe.category}</span>
          <span className="muted">{recipe.cookingTime} • {recipe.servings} servings</span>
        </div>
      </div>

      <div className="details-section">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
        </ul>
      </div>

      <div className="details-section">
        <h3>Instructions</h3>
        <ol className="instructions-list">
          {instructions.map((step, idx) => (
            <li key={idx}>
              <div className="instruction-step">{step}</div>
            </li>
          ))}
        </ol>
      </div>

      <div className="action-buttons">
        <button onClick={() => navigate(`/edit/${recipe._id}`)}>Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
        {onClose && <button onClick={onClose} className="cancel-btn">Close</button>}
      </div>
    </div>
  );
}

export default RecipeDetails;