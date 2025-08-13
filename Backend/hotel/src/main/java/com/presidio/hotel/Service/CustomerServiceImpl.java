package com.presidio.hotel.Service;

import com.presidio.hotel.Dto.CustomerDto;
import com.presidio.hotel.Exception.ResourceNotFoundException;
import com.presidio.hotel.Model.Customer;
import com.presidio.hotel.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository repo;

    @Override
    public CustomerDto addCustomer(CustomerDto dto) {
        Customer customer = mapToEntity(dto);
        return mapToDto(repo.save(customer));
    }

    @Override
    public CustomerDto getCustomerById(Long id) {
        Customer customer = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer","io",id));
        return mapToDto(customer);
    }

    @Override
    public List<CustomerDto> getAllCustomers() {
        return repo.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDto updateCustomer(Long id, CustomerDto updatedDto) {
        Customer existing = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer","id",id));

        existing.setName(updatedDto.getName());
        existing.setEmail(updatedDto.getEmail());
        existing.setPhoneNo(updatedDto.getPhoneNo());
        existing.setAddress(updatedDto.getAddress());
        existing.setIdProof(updatedDto.getIdProof());
        existing.setIdProofNo(updatedDto.getIdProofNo());

        return mapToDto(repo.save(existing));
    }

    @Override
    public void deleteCustomer(Long id) {
        repo.deleteById(id);
    }

    // ------------ Helper Methods ----------------

    private CustomerDto mapToDto(Customer c) {
        CustomerDto dto = new CustomerDto();
        dto.setId(c.getId());
        dto.setName(c.getName());
        dto.setEmail(c.getEmail());
        dto.setPhoneNo(c.getPhoneNo());
        dto.setAddress(c.getAddress());
        dto.setIdProof(c.getIdProof());
        dto.setIdProofNo(c.getIdProofNo());
        return dto;
    }

    private Customer mapToEntity(CustomerDto dto) {
        Customer c = new Customer();
        c.setName(dto.getName());
        c.setEmail(dto.getEmail());
        c.setPhoneNo(dto.getPhoneNo());
        c.setAddress(dto.getAddress());
        c.setIdProof(dto.getIdProof());
        c.setIdProofNo(dto.getIdProofNo());
        return c;
    }
}
