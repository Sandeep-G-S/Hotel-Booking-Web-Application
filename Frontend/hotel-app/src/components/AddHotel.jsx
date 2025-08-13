import React, { useState } from 'react';
import { createHotel } from '../services/api';

function AddHotel() {
  const [hotel, setHotel] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createHotel(hotel).then(() => {
      alert('Hotel added successfully!');
      setHotel({ name: '', address: '', city: '', state: '', zipCode: '', contactNumber: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Hotel</h3>
      <input type="text" name="name" placeholder="Hotel Name" value={hotel.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={hotel.address} onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" value={hotel.city} onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" value={hotel.state} onChange={handleChange} required />
      <input type="text" name="zipCode" placeholder="Zip Code" value={hotel.zipCode} onChange={handleChange} required />
      <input type="text" name="contactNumber" placeholder="Contact Number" value={hotel.contactNumber} onChange={handleChange} required />
      <button type="submit">Add Hotel</button>
    </form>
  );
}

export default AddHotel;
