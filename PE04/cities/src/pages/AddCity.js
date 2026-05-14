import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCities } from '../context/CitiesContext';
import './AddCity.css';

export default function AddCity() {
  const { addCity } = useCities();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', country: '', population: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.country || !form.population) return;
    addCity(form);
    navigate('/');
  };

  return (
    <div className="add-container">
      <div className="add-box">
        <h2>Add City</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name:</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Country:</label>
            <input name="country" value={form.country} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Population:</label>
            <input name="population" value={form.population} onChange={handleChange} />
          </div>
          <button type="submit">Add City</button>
        </form>
      </div>
    </div>
  );
}