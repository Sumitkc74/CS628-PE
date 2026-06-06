import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DEFAULT_CATEGORIES = [
  'Italian', 'Mexican', 'Asian', 'American', 'Mediterranean',
  'Indian', 'French', 'Greek', 'Japanese', 'Thai',
  'Dessert', 'Breakfast', 'Vegetarian', 'Vegan', 'Seafood'
];

const DEFAULT_SERVINGS = [
  '1 person', '2 people', '3 people', '4 people',
  '5 people', '6 people', '8 people', '10 people', '12+ people'
];

const DEFAULT_COOKING_TIMES = [
  '5 minutes', '10 minutes', '15 minutes', '20 minutes',
  '30 minutes', '45 minutes', '1 hour', '1.5 hours',
  '2 hours', '3 hours', '4+ hours', 'Overnight'
];

function DropdownWithCustom({ name, value, onChange, options, placeholder }) {
  const [customOptions, setCustomOptions] = useState(options);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handleSelect = e => {
    if (e.target.value === '__add_custom__') {
      setShowCustomInput(true);
    } else {
      onChange(name, e.target.value);
    }
  };

  const handleAddCustom = () => {
    if (customValue.trim()) {
      const newOptions = [...customOptions, customValue.trim()];
      setCustomOptions(newOptions);
      onChange(name, customValue.trim());
      setCustomValue('');
      setShowCustomInput(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCustom();
    }
    if (e.key === 'Escape') {
      setShowCustomInput(false);
      setCustomValue('');
    }
  };

  return (
    <div className="dropdown-wrapper">
      {!showCustomInput ? (
        <select value={value} onChange={handleSelect} className="custom-select">
          <option value="">{placeholder}</option>
          {customOptions.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
          <option value="__add_custom__">+ Add custom...</option>
        </select>
      ) : (
        <div className="custom-input-row">
          <input
            autoFocus
            type="text"
            value={customValue}
            onChange={e => setCustomValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Type custom ${name} and press Enter`}
            className="custom-input"
          />
          <button type="button" className="confirm-custom-btn" onClick={handleAddCustom}>Add</button>
          <button type="button" className="cancel-custom-btn" onClick={() => { setShowCustomInput(false); setCustomValue(''); }}>✕</button>
        </div>
      )}
      {value && !showCustomInput && (
        <span className="selected-tag">
          {value}
          <button type="button" className="clear-tag" onClick={() => onChange(name, '')}>✕</button>
        </span>
      )}
    </div>
  );
}

function AddRecipe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', ingredients: '', instructions: '',
    cookingTime: '', servings: '', category: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting to:', `${process.env.REACT_APP_API_URL}/api/recipes`);
    console.log('Form data:', form);
    axios.post(`${process.env.REACT_APP_API_URL}/api/recipes`, form)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch(err => {
        setLoading(false);
        const errorMsg = err.response?.data?.message || err.message || 'Failed to add recipe. Please try again.';
        setError(errorMsg);
        console.error('API Error:', errorMsg, err);
      });
  };

  return (
    <div className="add-recipe-page">
      <div className="add-recipe-container">
        <div className="add-recipe-header">
          <h2>Add New Recipe</h2>
          <p>Fill in the details below to add a new recipe to your collection.</p>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label>Recipe Name</label>
              <input name="name" placeholder="e.g. Spaghetti Carbonara" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Cooking Time</label>
              <DropdownWithCustom
                name="cookingTime"
                value={form.cookingTime}
                onChange={handleDropdownChange}
                options={DEFAULT_COOKING_TIMES}
                placeholder="Select cooking time"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <DropdownWithCustom
                name="category"
                value={form.category}
                onChange={handleDropdownChange}
                options={DEFAULT_CATEGORIES}
                placeholder="Select a category"
              />
            </div>
            <div className="form-group">
              <label>Servings</label>
              <DropdownWithCustom
                name="servings"
                value={form.servings}
                onChange={handleDropdownChange}
                options={DEFAULT_SERVINGS}
                placeholder="Select servings"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <textarea name="ingredients" placeholder="List your ingredients here, one per line" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea name="instructions" placeholder="Write your step by step cooking instructions here" onChange={handleChange} required />
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Recipe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;