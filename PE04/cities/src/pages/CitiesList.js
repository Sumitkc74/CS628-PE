import { Link, Outlet } from 'react-router-dom';
import { useCities } from '../context/CitiesContext';
import './CitiesList.css';

export default function CitiesList() {
  const { cities } = useCities();

  return (
    <div className="cities-container">
      <div className="cities-box">
        <h2>Cities List</h2>
        <ul>
          {cities.map(city => (
            <li key={city.id}>
              <Link to={`/city/${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
}