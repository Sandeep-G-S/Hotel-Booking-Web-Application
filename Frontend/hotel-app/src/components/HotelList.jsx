import React, { useEffect, useState } from 'react';
import { getAllHotels } from '../services/api';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getAllHotels().then((res) => setHotels(res.data));
  }, []);

  return (
    <div>
      <h3>All Hotels</h3>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>
            <strong>{hotel.name}</strong> - {hotel.address}, {hotel.city}, {hotel.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
