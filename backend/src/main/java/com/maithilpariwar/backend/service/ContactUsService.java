package com.maithilpariwar.backend.service;

import com.maithilpariwar.backend.dto.ContactUsRequest;
import com.maithilpariwar.backend.model.ContactUs;
import com.maithilpariwar.backend.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository contactUsRepository;

    public ContactUs saveContactUs(ContactUsRequest request) {
        ContactUs contactUs = new ContactUs();
        contactUs.setName(request.getName());
        contactUs.setEmail(request.getEmail());
        contactUs.setMessage(request.getMessage());
        
        return contactUsRepository.save(contactUs);
    }

    public List<ContactUs> getAllContactMessages() {
        return contactUsRepository.findAll();
    }
}
