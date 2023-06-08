
import React, { useState } from 'react';
import './App.css';


const cities = [
  { id: 1, name: 'Kota' },
  { id: 2, name: 'Mumbai' },
  { id: 3, name: 'Bengaluru' },
  { id: 4, name: 'Gurugram' },
  { id: 5, name: 'Chennai' },
  { id: 6, name: 'Hyderabad' },
  { id: 7, name: 'Kolkata' },
  { id: 8, name: 'Ahmedabad' },
  { id: 9, name: 'Jaipur' },
  { id: 10, name: 'Surat' },
  { id: 11, name: 'New Delhi' },
  { id: 12, name: 'Others' },
  // Add more cities as needed
];

const Dropdown = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (e) => {
    const cityId = parseInt(e.target.value);
    const city = cities.find((c) => c.id === cityId);
    setSelectedCity(city);
  };

  return (
    <div className="back">
    <div className="container">
      <label className="label" htmlFor="cityDropdown">Select a city:</label>
      <select className="select" id="cityDropdown" value={selectedCity?.id || ''} onChange={handleCityChange}>
        <option value="">-- Select a city --</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <div className="selectedCity">
          <h3>Selected City:</h3>
          <p>Name: {selectedCity.name}</p>
          {/* You can display more details about the selected city */}
        </div>
      )}

        <p className="copyright">
          © 2023 Rajat Nagar. All rights reserved.
        </p>
    </div>
    </div>
  );
};

export default Dropdown;
