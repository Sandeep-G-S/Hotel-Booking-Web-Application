// com.presidio.hotel.Service.BookingServiceImpl
package com.presidio.hotel.Service;

import com.presidio.hotel.Dto.BookingDto;
import com.presidio.hotel.Model.Booking;
import com.presidio.hotel.Model.Customer;
import com.presidio.hotel.Model.Room;
import com.presidio.hotel.Repository.BookingRepository;
import com.presidio.hotel.Repository.CustomerRepository;
import com.presidio.hotel.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private RoomRepository roomRepo;

    @Autowired
    private CustomerRepository customerRepo;

    @Override
    public BookingDto createBooking(BookingDto dto) {
        Booking booking = new Booking();

        booking.setDate(dto.getDate());
        booking.setCheckIn(dto.getCheckIn());
        booking.setCheckOut(dto.getCheckOut());
        booking.setTotalAmount(dto.getTotalAmount());
        booking.setStatus(dto.getStatus());

        Room room = roomRepo.findById(dto.getRoomId()).orElseThrow();
        Customer customer = customerRepo.findById(dto.getCustomer().getId()).orElseThrow();

        booking.setRoom(room);
        booking.setCustomer(customer);

        Booking saved = bookingRepo.save(booking);
        room.setAvailable(false);
        return mapToDto(saved);
    }

    @Override
    public List<BookingDto> getAllBooking() {
        return bookingRepo.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public BookingDto getBookingById(Long id) {
        Booking booking = bookingRepo.findById(id).orElse(null);
        return booking != null ? mapToDto(booking) : null;
    }

    // Helper method
    private BookingDto mapToDto(Booking booking) {
        BookingDto dto = new BookingDto();
        dto.setId(booking.getId());
        dto.setDate(booking.getDate());
        dto.setCheckIn(booking.getCheckIn());
        dto.setCheckOut(booking.getCheckOut());
        dto.setTotalAmount(booking.getTotalAmount());
        dto.setStatus(booking.getStatus());
        dto.setRoomId(booking.getRoom().getId());
        dto.setId(booking.getCustomer().getId());
        return dto;
    }
}
