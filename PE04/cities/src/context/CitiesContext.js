import { createContext, useContext, useState } from 'react';

const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities(prev => [...prev, { ...city, id: Date.now() }]);
  };

  return (
    <CitiesContext.Provider value={{ cities, addCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  return useContext(CitiesContext);
}