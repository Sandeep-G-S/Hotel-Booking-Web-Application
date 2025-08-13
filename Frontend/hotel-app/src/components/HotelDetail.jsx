import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookRoom from './BookRoom';

function HotelDetail({ hotel }) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/rooms/hotel/${hotel.id}`)
      .then((res) => {
        console.log("Fetched rooms:", res.data);
        setRooms(res.data);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
      });
  }, [hotel.id]);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
      <div style={{
        width: '85%',
        maxWidth: '1100px',
        backgroundColor: '#111', // dark grey background
        border: '3px solid #ff9900', // orange border
        borderRadius: '16px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
        padding: '30px',
        color: '#fff'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '10px', color: '#ff9900' }}>
          {hotel.name}
        </h2>
        <p style={{ textAlign: 'center', color: '#ccc' }}>
          {hotel.address}, {hotel.city}, {hotel.state}
        </p>
        <p style={{ textAlign: 'center', color: '#bbb', marginBottom: '20px' }}>
          📞 {hotel.contactNumber}
        </p>

        <div style={{
          backgroundColor: '#1a1a1a',
          padding: '16px',
          borderRadius: '10px',
          marginBottom: '30px',
          fontSize: '15px',
          color: '#ddd',
          textAlign: 'center',
          border: '1px solid #ff9900'
        }}>
          A comfortable hotel in {hotel.city}. Enjoy your stay with premium facilities and cozy rooms.
        </div>

        <h3 style={{ marginBottom: '20px', color: '#ff9900' }}>Available Rooms</h3>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {rooms.map((room) => (
            <div
              key={room.id}
              style={{
                border: '1px solid #ff9900',
                padding: '14px',
                borderRadius: '12px',
                width: '220px',
                backgroundColor: '#111', // same dark background as main card
                color: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <p><strong>Room #{room.roomNumber}</strong></p>
              <p>Type: {room.type}</p>
              <p>Floor: {room.floor}</p>
              <p>Price: ₹{room.pricePerNight} / night</p>
              <p>Status: {room.available ? "✅ Available" : "❌ Booked"}</p>
              {room.available && (
                <button
                  onClick={() => setSelectedRoom(room)}
                  style={{
                    backgroundColor: '#ff9900',
                    color: '#000',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    fontWeight: '600',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e68a00'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#ff9900'}
                >
                  Book Now
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Booking form component */}
        {selectedRoom && (
          <BookRoom
            room={selectedRoom}
            onClose={() => setSelectedRoom(null)}
          />
        )}
      </div>
    </div>
  );
}

export default HotelDetail;
