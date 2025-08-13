package com.presidio.hotel.Repository;

import com.presidio.hotel.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
