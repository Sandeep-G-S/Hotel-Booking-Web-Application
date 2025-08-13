import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api';

export const getAllHotels = () => axios.get(`${BASE_URL}/hotels`);
export const createHotel = (hotel) => axios.post(`${BASE_URL}/hotels`, hotel);

export const getAllRooms = () => axios.get(`${BASE_URL}/rooms`);
export const getRoomsByHotel = (hotelId) => axios.get(`${BASE_URL}/rooms/getRoomsByHotel/${hotelId}`);
export const createRoom = (room) => axios.post(`${BASE_URL}/rooms`, room);
export const searchHotelsByCity = (city) => axios.get(`${BASE_URL}/hotels/search?city=${city}`);

