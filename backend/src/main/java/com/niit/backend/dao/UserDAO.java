package com.niit.backend.dao;

import java.util.List;

import com.niit.backend.dto.Address;
import com.niit.backend.dto.User;

public interface UserDAO {

	// add an user
	boolean addUser(User user);
	User getByEmail(String email);
	
	// add an address
	boolean addAddress(Address address);
	Address getBillingAddress(int userId);
	List<Address> listShippingAddresses(int userId);

}
