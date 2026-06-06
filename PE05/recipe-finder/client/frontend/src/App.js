import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;