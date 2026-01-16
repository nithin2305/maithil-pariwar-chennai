# Maithil Pariwar Chennai - Backend API

This is the backend REST API for Maithil Pariwar Chennai website built with Spring Boot.

## Technologies Used

- Java 17
- Spring Boot 3.2.0
- Spring Security with JWT
- Spring Data JPA
- H2 Database (development)
- Maven

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6+

### Running the Application

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

### Accessing H2 Console

The H2 database console is available at: `http://localhost:8080/h2-console`

- JDBC URL: `jdbc:h2:file:./data/maithilpariwar`
- Username: `sa`
- Password: (leave empty)

## API Endpoints

### Authentication

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "user123",
  "email": "user@example.com",
  "password": "password123",
  "role": "USER"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "username": "user123",
  "password": "password123"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "username": "user123",
  "email": "user@example.com",
  "role": "USER"
}
```

### Contact Us

#### Submit Contact Form
```
POST /api/contact/submit
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "This is a test message"
}
```

#### Get All Contact Messages (Admin only)
```
GET /api/contact/all
Authorization: Bearer {token}
```

## Database Schema

### Users Table
- id (BIGINT, Primary Key)
- username (VARCHAR, Unique)
- email (VARCHAR, Unique)
- password (VARCHAR)
- role (VARCHAR) - ADMIN or USER
- created_at (TIMESTAMP)

### Contact_Us Table
- id (BIGINT, Primary Key)
- name (VARCHAR)
- email (VARCHAR)
- message (VARCHAR)
- created_at (TIMESTAMP)

## Security

- JWT token-based authentication
- Password encryption using BCrypt
- CORS enabled for http://localhost:4200

## Configuration

Edit `src/main/resources/application.properties` to configure:
- Database connection
- JWT secret and expiration
- CORS allowed origins
- Server port
