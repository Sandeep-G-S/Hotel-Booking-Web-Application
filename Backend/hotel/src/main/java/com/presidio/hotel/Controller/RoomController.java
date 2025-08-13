package com.presidio.hotel.Controller;

import com.presidio.hotel.Dto.RoomDto;
import com.presidio.hotel.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService service;

    @PostMapping("/addRoom")
    public ResponseEntity<RoomDto> addRoom(@RequestBody RoomDto room ){
        RoomDto newRoom = service.addRoom(room);
        return ResponseEntity.ok(newRoom);
    }

    @GetMapping("/getAllRoom")
    public ResponseEntity<List<RoomDto>> getAllRooms(){
        List<RoomDto> rooms = service.getAllRooms();
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/getRoomById/{id}")
    public RoomDto getRoomById(@PathVariable Long id ){
        RoomDto room = service.getRoomById(id);
        return room;
    }

        @GetMapping("/hotel/{hotelId}")
        public ResponseEntity<List<RoomDto>> getRoomsByHotel(@PathVariable Long hotelId) {
            List<RoomDto> roomList = service.getRoomsByHotel(hotelId);
            return ResponseEntity.ok(roomList);
        }
}


