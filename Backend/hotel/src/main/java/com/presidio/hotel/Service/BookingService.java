// com.presidio.hotel.Service.BookingService
package com.presidio.hotel.Service;

import com.presidio.hotel.Dto.BookingDto;
import java.util.List;

public interface BookingService {
    BookingDto createBooking(BookingDto bookingDto);
    List<BookingDto> getAllBooking();
    BookingDto getBookingById(Long id);
}
