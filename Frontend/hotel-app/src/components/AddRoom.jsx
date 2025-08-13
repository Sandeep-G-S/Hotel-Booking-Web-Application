import React, { useEffect, useState } from 'react';
import { getAllHotels, createRoom } from '../services/api';

function AddRoom() {
  const [room, setRoom] = useState({
    roomNumber: '',
    type: '',
    pricePerNight: '',
    isAvailable: true,
    floor: '',
    hotelId: ''
  });

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getAllHotels().then(res => setHotels(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRoom(room).then(() => {
      alert("Room created successfully!");
      setRoom({ roomNumber: '', type: '', pricePerNight: '', isAvailable: true, floor: '', hotelId: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Room</h3>
      <input type="number" name="roomNumber" value={room.roomNumber} onChange={handleChange} placeholder="Room Number" required />
      <input type="text" name="type" value={room.type} onChange={handleChange} placeholder="Type" required />
      <input type="number" name="pricePerNight" value={room.pricePerNight} onChange={handleChange} placeholder="Price Per Night" required />
      <input type="number" name="floor" value={room.floor} onChange={handleChange} placeholder="Floor" required />

      <select name="hotelId" value={room.hotelId} onChange={handleChange} required>
        <option value="">Select Hotel</option>
        {hotels.map(h => <option key={h.id} value={h.id}>{h.name}</option>)}
      </select>

      <button type="submit">Add Room</button>
    </form>
  );
}

export default AddRoom;
