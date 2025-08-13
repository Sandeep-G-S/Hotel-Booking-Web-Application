import React, { useEffect, useState } from 'react';
import { getAllRooms } from '../services/api';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getAllRooms().then(res => setRooms(res.data));
  }, []);

  return (
    <div>
      <h3>All Rooms</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Room No</th>
            <th>Type</th>
            <th>Price</th>
            <th>Floor</th>
            <th>Available</th>
            <th>Hotel Name</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.roomNumber}</td>
              <td>{room.type}</td>
              <td>{room.pricePerNight}</td>
              <td>{room.floor}</td>
              <td>{room.available ? "Yes" : "No"}</td>
              <td>{room.hotelName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;
