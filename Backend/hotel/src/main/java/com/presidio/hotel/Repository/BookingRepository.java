package com.presidio.hotel.Repository;

import com.presidio.hotel.Model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking,Long> {
}
