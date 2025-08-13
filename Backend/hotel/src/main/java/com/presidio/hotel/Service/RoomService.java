package com.presidio.hotel.Service;
import java.util.List;

import com.presidio.hotel.Dto.RoomDto;

public interface RoomService {
    RoomDto addRoom(RoomDto room);
    List<RoomDto> getAllRooms();
    RoomDto getRoomById(Long id);
    List<RoomDto> getRoomsByHotel(Long hotelId);

}
