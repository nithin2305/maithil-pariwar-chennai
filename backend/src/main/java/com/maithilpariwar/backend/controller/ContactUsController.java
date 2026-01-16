package com.maithilpariwar.backend.controller;

import com.maithilpariwar.backend.dto.ContactUsRequest;
import com.maithilpariwar.backend.model.ContactUs;
import com.maithilpariwar.backend.service.ContactUsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitContactForm(@Valid @RequestBody ContactUsRequest request) {
        try {
            ContactUs savedContact = contactUsService.saveContactUs(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body("Thank you for contacting us! We will get back to you soon.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to submit contact form");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<ContactUs>> getAllContactMessages() {
        List<ContactUs> messages = contactUsService.getAllContactMessages();
        return ResponseEntity.ok(messages);
    }
}
