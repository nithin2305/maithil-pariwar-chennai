# Maithil Pariwar Chennai - Full Stack Application

This project consists of an Angular frontend and Spring Boot backend for the Maithil Pariwar Chennai community website.

## Project Structure

```
├── backend/          # Spring Boot REST API
├── src/             # Angular Frontend
│   ├── app/
│   │   ├── pages/
│   │   │   ├── login/       # Login component
│   │   │   ├── contact-us/  # Contact us form
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── auth.service.ts      # Authentication service
│   │   │   └── contact-us.service.ts # Contact us service
│   │   └── shared/
│   │       └── navbar/      # Navigation with login/logout
│   └── ...
└── README.md
```

## Features Implemented

### Backend (Spring Boot)
- ✅ REST API with Spring Boot 3.2.0
- ✅ JWT-based authentication
- ✅ User management (Admin and Normal User roles)
- ✅ Contact Us form submission and storage
- ✅ H2 database for development (easily switchable to MySQL)
- ✅ Spring Security with password encryption
- ✅ CORS configuration for Angular frontend

### Frontend (Angular 16)
- ✅ Login button in header (top right corner)
- ✅ Login page with form validation
- ✅ JWT token storage and management
- ✅ Contact Us form integrated with backend API
- ✅ Logout functionality
- ✅ Consistent design across all pages
- ✅ Responsive navigation

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- Node.js 16+ and npm
- Angular CLI 16+

### Backend Setup

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

The backend will start on `http://localhost:8080`

#### Backend API Endpoints

**Authentication:**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

**Contact Us:**
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/all` - Get all contact messages (protected)

**H2 Console:**
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:file:./data/maithilpariwar`
- Username: `sa`
- Password: (empty)

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The frontend will start on `http://localhost:4200`

## Usage

### Creating Admin User

Use the backend API to create an admin user:

```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@maithilpariwar.in",
    "password": "admin123",
    "role": "ADMIN"
  }'
```

### Login Flow

1. Click the "Login" button in the top right corner of the navigation bar
2. Enter username and password
3. Upon successful login, the user is redirected to the home page
4. The "Login" button changes to "Logout"
5. JWT token is stored in localStorage for subsequent requests

### Contact Us Flow

1. Navigate to the Contact Us page
2. Fill in the name, email, and message fields
3. Click "Send" button
4. The form data is sent to the backend API
5. Data is stored in the database
6. Success message is displayed to the user

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP
);
```

### Contact_Us Table
```sql
CREATE TABLE contact_us (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message VARCHAR(1000) NOT NULL,
    created_at TIMESTAMP
);
```

## Design Consistency

The design maintains consistency through:
- **Color Scheme**: Primary orange (#d24805) and secondary orange (#f76c1d)
- **Background**: Light beige (#fff5e6)
- **Buttons**: Rounded corners (25px border-radius) with hover effects
- **Typography**: Bold headers, consistent font sizes
- **Forms**: Clean white cards with shadow effects
- **Navigation**: Responsive with mobile hamburger menu

## Security Features

- Passwords are encrypted using BCrypt
- JWT tokens for stateless authentication
- CORS configured to allow only frontend origin
- SQL injection prevention through JPA
- XSS protection through Angular's built-in sanitization

## Production Configuration

To switch to MySQL in production:

1. Update `backend/src/main/resources/application.properties`:
```properties
# Comment out H2 configuration
# Uncomment MySQL configuration
spring.datasource.url=jdbc:mysql://localhost:3306/maithilpariwar
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```

2. Uncomment MySQL dependency in `backend/pom.xml`

## Technology Stack

**Frontend:**
- Angular 16
- Angular Material
- Bootstrap 5
- RxJS
- TypeScript

**Backend:**
- Spring Boot 3.2.0
- Spring Security
- Spring Data JPA
- JWT (jjwt 0.12.3)
- H2 Database (dev)
- Maven

## License

This project is developed for Maithil Pariwar Chennai community.

## Support

For issues or questions, contact: info@maithilpariwar.in
