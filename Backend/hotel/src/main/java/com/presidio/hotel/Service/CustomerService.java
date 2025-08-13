package com.presidio.hotel.Service;

import com.presidio.hotel.Dto.CustomerDto;
import java.util.List;

public interface CustomerService {

    CustomerDto addCustomer(CustomerDto customer);
    CustomerDto getCustomerById(Long id);
    List<CustomerDto> getAllCustomers();
    CustomerDto updateCustomer(Long id, CustomerDto updatedCustomer);
    void deleteCustomer(Long id);

}
