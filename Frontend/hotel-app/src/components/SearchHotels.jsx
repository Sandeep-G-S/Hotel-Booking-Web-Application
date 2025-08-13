  import React, { useState } from 'react';
  import axios from 'axios';
  import HotelDetail from './HotelDetail';

  function SearchHotels() {
    const [city, setCity] = useState('');
    const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);

    const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

    const fetchHotelImage = async (hotelName, hotelCity) => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            `${hotelName} ${hotelCity} hotel`
          )}&client_id=${UNSPLASH_KEY}&per_page=1`
        );
        const data = await res.json();
        return data.results[0]?.urls?.regular || "https://source.unsplash.com/400x200/?hotel,resort";
      } catch (error) {
        console.error("Error fetching image from Unsplash:", error);
        return "https://source.unsplash.com/400x200/?hotel,resort";
      }
    };

    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.get(`http://localhost:8081/api/hotels/search?city=${city}`);
        const hotelsData = res.data;

        // Fetch images for each hotel
        const hotelsWithImages = await Promise.all(
          hotelsData.map(async (hotel) => {
            const imageUrl = await fetchHotelImage(hotel.name, hotel.city);
            return { ...hotel, imageUrl };
          })
        );

        setHotels(hotelsWithImages);
        setSelectedHotel(null);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    const handleSelectHotel = (hotel) => {
      setSelectedHotel(hotel);
    };

  return (
  <div style={{ minHeight: '100vh', backgroundColor: '#1f1f1f', color: '#fff' }}>
    {/* --- Top header + search (on top of page) --- */}
    <div style={{ textAlign: 'center', padding: '18px 16px' }}>
      <h1 style={{
        fontSize: '34px',
        margin: '6px 0 14px',
        color: '#ff9900'
      }}>
        Find your next stay
      </h1>

      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          maxWidth: 720,
          margin: '0 auto'
        }}
      >
        <input
          type="text"
          placeholder="Enter city (e.g. Chennai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #444',
            fontSize: '16px',
            width: '320px',
            backgroundColor: '#2b2b2b',
            color: '#fff'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px 18px',
            backgroundColor: '#ff9900',
            color: '#111',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background-color 0.18s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e68a00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ff9900'}
        >
          Search
        </button>
      </form>
    </div>

    {/* --- Main area --- */}
    <div style={{ padding: '18px 20px 60px' }}>
      {!selectedHotel ? (
        hotels.length === 0 ? (
          /* empty state when no results yet */
          <div style={{ textAlign: 'center', color: '#bdbdbd', marginTop: 24 }}>
            Type a city and press Search to see hotels.
          </div>
        ) : (
          /* hotel cards grid */
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: 8
            }}
          >
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => handleSelectHotel(hotel)}
                style={{
                  border: '1px solid #333',
                  borderRadius: '10px',
                  width: '280px',
                  padding: '12px',  
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  color: '#000',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                  transition: 'transform 0.18s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    height: '180px',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{ margin: '6px 0' }}>{hotel.name}</h3>
                <p style={{ margin: 0, color: '#444' }}>{hotel.address}, {hotel.city}</p>
              </div>
            ))}
          </div>
        )
      ) : (
        /* selected hotel detail (centered 85% width) */
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <div style={{ width: '85%', maxWidth: '1100px' }}>
            <HotelDetail hotel={selectedHotel} />
          </div>
        </div>
      )}
    </div>
  </div>
);

}

export default SearchHotels;
