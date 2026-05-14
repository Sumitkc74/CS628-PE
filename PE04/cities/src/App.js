import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import CitiesList from './pages/CitiesList';
import CityDetails from './pages/CityDetails';
import AddCity from './pages/AddCity';
import { CitiesProvider } from './context/CitiesContext';

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CitiesList />}>
            <Route path="city/:id" element={<CityDetails />} />
          </Route>
          <Route path="/add" element={<AddCity />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}