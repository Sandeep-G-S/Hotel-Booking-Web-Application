package com.presidio.hotel.Controller;

import com.presidio.hotel.Dto.BookingDto;
import com.presidio.hotel.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/addBooking")
    public ResponseEntity<BookingDto> createBooking(@RequestBody BookingDto bookingDto) {
        BookingDto created = bookingService.createBooking(bookingDto);
        return ResponseEntity.ok(created);
    }

    @GetMapping("/getAllBookings")
    public ResponseEntity<List<BookingDto>> getAllBookings() {
        List<BookingDto> list = bookingService.getAllBooking();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/getBookingById/{id}")
    public ResponseEntity<BookingDto> getBookingById(@PathVariable Long id) {
        BookingDto booking = bookingService.getBookingById(id);
        if (booking != null) {
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
