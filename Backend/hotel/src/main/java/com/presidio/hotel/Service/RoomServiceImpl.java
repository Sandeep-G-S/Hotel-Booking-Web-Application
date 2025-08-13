package com.presidio.hotel.Service;

import com.presidio.hotel.Dto.RoomDto;
import com.presidio.hotel.Model.Hotel;
import com.presidio.hotel.Model.Room;
import com.presidio.hotel.Repository.HotelRepository;
import com.presidio.hotel.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RoomServiceImpl implements RoomService{

    @Autowired
    private RoomRepository repo;
    @Autowired
    private HotelRepository hotelRepo;


    @Override
    public RoomDto addRoom(RoomDto dto) {
        Room room = new Room();
        room.setRoomNumber(dto.getRoomNumber());
        room.setType(dto.getType());
        room.setPricePerNight(dto.getPricePerNight());
        room.setAvailable(dto.isAvailable());
        room.setFloor(dto.getFloor());

        // 🔗 Assign Hotel
        if (dto.getHotelId() != null) {
            Hotel hotel = hotelRepo.findById(dto.getHotelId())
                    .orElseThrow(() -> new RuntimeException("Hotel not found with ID: " + dto.getHotelId()));
            room.setHotel(hotel);
        }

        Room savedRoom = repo.save(room);

        RoomDto savedDto = new RoomDto();
        savedDto.setId(savedRoom.getId());
        savedDto.setRoomNumber(savedRoom.getRoomNumber());
        savedDto.setType(savedRoom.getType());
        savedDto.setPricePerNight(savedRoom.getPricePerNight());
        savedDto.setAvailable(savedRoom.isAvailable());
        savedDto.setFloor(savedRoom.getFloor());
        savedDto.setHotelId(savedRoom.getHotel().getId());

        return savedDto;
    }


    @Override
        public List<RoomDto> getAllRooms() {
            List<Room> rooms = repo.findAll();
            return rooms.stream().map(r -> {
                RoomDto dto = new RoomDto();
                dto.setId(r.getId());
                dto.setRoomNumber(r.getRoomNumber());
                dto.setType(r.getType());
                dto.setPricePerNight(r.getPricePerNight());
                dto.setAvailable(r.isAvailable());
                dto.setFloor(r.getFloor());

                dto.setHotelId(r.getHotel() != null ? r.getHotel().getId() : null);

                Hotel hotel = r.getHotel();
                if (hotel != null) {
                    dto.setHotelId(hotel.getId());
                    dto.setHotelName(hotel.getName());
                    dto.setHotelAddress(hotel.getAddress());
                }


                return dto;
            }).collect(Collectors.toList());
        }

        @Override
        public RoomDto getRoomById(Long id) {
            Optional<Room> opt = repo.findById(id);
            if (opt.isPresent()) {
                Room r = opt.get();
                RoomDto dto = new RoomDto();
                dto.setId(r.getId());
                dto.setRoomNumber(r.getRoomNumber());
                dto.setType(r.getType());
                dto.setPricePerNight(r.getPricePerNight());
                dto.setAvailable(r.isAvailable());
                dto.setFloor(r.getFloor());

                dto.setHotelId(r.getHotel() != null ? r.getHotel().getId() : null);

                Hotel hotel = r.getHotel();
                if (hotel != null) {
                    dto.setHotelId(hotel.getId());
                    dto.setHotelName(hotel.getName());
                    dto.setHotelAddress(hotel.getAddress());
                }

                return dto;
            }
            return null;
        }

    @Override
    public List<RoomDto> getRoomsByHotel(Long hotelId) {
        List<Room> rooms = repo.findByHotelId(hotelId);

        return rooms.stream().map(r -> {
            RoomDto dto = new RoomDto();
            dto.setId(r.getId());
            dto.setRoomNumber(r.getRoomNumber());
            dto.setType(r.getType());
            dto.setPricePerNight(r.getPricePerNight());
            dto.setAvailable(r.isAvailable());
            dto.setFloor(r.getFloor());

            Hotel hotel = r.getHotel();
            if (hotel != null) {
                dto.setHotelId(hotel.getId());
                dto.setHotelName(hotel.getName());
                dto.setHotelAddress(hotel.getAddress());
            }

            return dto;
        }).collect(Collectors.toList());
    }
}
