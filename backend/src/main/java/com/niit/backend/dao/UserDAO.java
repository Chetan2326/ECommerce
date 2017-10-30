package com.niit.backend.dao;

import java.util.List;

import com.niit.backend.dto.Address;
import com.niit.backend.dto.User;

public interface UserDAO {

	// user related operation
	User getByEmail(String email);
	User get(int id);
	
	//add user
	boolean addUser(User user);

	// adding and updating a new address
	Address getAddress(int addressId);
	boolean addAddress(Address address);
	boolean updateAddress(Address address);
	Address getBillingAddress(int userId);
	List<Address> listShippingAddresses(int userId);

}
