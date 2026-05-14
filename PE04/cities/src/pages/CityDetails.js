import { useParams } from 'react-router-dom';
import { useCities } from '../context/CitiesContext';

export default function CityDetails() {
  const { id } = useParams();
  const { cities } = useCities();
  const city = cities.find(c => c.id === parseInt(id));

  if (!city) return <p>City not found.</p>;

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}