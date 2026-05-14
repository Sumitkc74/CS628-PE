import { NavLink } from 'react-router-dom';
import './CityCard.css';

export default function CityCard({ city }) {
  return (
    <NavLink
      to={`/city/${city.id}`}
      className={({ isActive }) => isActive ? 'city-card active' : 'city-card'}
    >
      <div className="city-card-index">{String(city.id).padStart(2, '0')}</div>
      <div className="city-card-info">
        <h3 className="city-card-name">{city.name}</h3>
        <span className="city-card-country">{city.country}</span>
      </div>
      <span className="city-card-arrow">→</span>
    </NavLink>
  );
}