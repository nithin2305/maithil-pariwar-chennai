package com.maithilpariwar.backend.config;

import com.maithilpariwar.backend.model.User;
import com.maithilpariwar.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Check if admin user already exists
        if (!userRepository.existsByUsername("admin")) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setEmail("admin@maithilpariwar.com");
            admin.setPassword(passwordEncoder.encode("admin123")); // Default password
            admin.setRole(User.Role.ADMIN);
            admin.setCreatedAt(LocalDateTime.now());

            userRepository.save(admin);
            System.out.println("================================");
            System.out.println("Default Admin User Created!");
            System.out.println("Username: admin");
            System.out.println("Password: admin123");
            System.out.println("Email: admin@maithilpariwar.com");
            System.out.println("================================");
        }
    }
}
