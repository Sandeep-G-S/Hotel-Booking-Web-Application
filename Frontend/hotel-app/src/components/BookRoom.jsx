import React, { useState } from 'react';
import axios from 'axios';

function BookRoom({ room, onClose }) {
  const [booking, setBooking] = useState({
    customerId: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];

    const payload = {
      date: today,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      totalAmount: room.pricePerNight,
      status: "CONFIRMED",
      roomId: room.id,
      customer: {
        id: parseInt(booking.customerId)
      }
    };

    try {
      await axios.post("http://localhost:8081/booking/addBooking", payload);
      alert("Room booked successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Booking failed. Check if customer ID is valid.");
    }
  };

  return (
    <div style={{
      border: '2px solid #ff9900',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '12px',
      backgroundColor: '#111',
      color: '#fff',
      boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h3 style={{ textAlign: 'center', color: '#ff9900', marginBottom: '20px' }}>
        Book Room #{room.roomNumber}
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="text"
          name="customerId"
          placeholder="Enter Customer ID"
          value={booking.customerId}
          onChange={handleChange}
          required
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #ff9900',
            backgroundColor: '#1a1a1a',
            color: '#fff'
          }}
        />
        <label>Check-in Date:</label>
        <input
          type="date"
          name="checkIn"
          value={booking.checkIn}
          onChange={handleChange}
          required
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #ff9900',
            backgroundColor: '#1a1a1a',
            color: '#fff'
          }}
        />
        <label>Check-out Date:</label>
        <input
          type="date"
          name="checkOut"
          value={booking.checkOut}
          onChange={handleChange}
          required
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #ff9900',
            backgroundColor: '#1a1a1a',
            color: '#fff'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#ff9900',
              color: '#000',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              flex: 1,
              marginRight: '5px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e68a00'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ff9900'}
          >
            Confirm Booking
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: '#444',
              color: '#fff',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              flex: 1,
              marginLeft: '5px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#666'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#444'}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookRoom;
