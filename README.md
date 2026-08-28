# EventSphere Frontend

EventSphere Frontend is the web-based user interface for the **EventSphere Event Management and Booking System**.

The frontend provides a simple and responsive interface for users and administrators to authenticate, browse events, manage events, manage users, create bookings, and view booking information.

It communicates with the EventSphere backend through the **API Gateway**, which routes requests to the appropriate microservices.

---

## 🌐 Overview

EventSphere is built using a microservices-based backend architecture.

The frontend communicates with the backend through a single API Gateway:

```text
                         EventSphere Frontend
                                  │
                                  │ HTTP / REST API
                                  ▼
                         ┌─────────────────┐
                         │   API Gateway   │
                         │      :8080      │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
        User Service        Event Service       Booking Service
              │                   │                   │
              ▼                   ▼                   ▼
         PostgreSQL           PostgreSQL            MongoDB
```

This repository contains only the **frontend layer** of the EventSphere system.

---

# ✨ Features

## 🔐 Authentication

* User login
* JWT-based authentication
* Session/token handling
* Protected user functionality
* Logout functionality
* Role-based frontend navigation

---

## 🎫 Event Management

Users can browse available events through the frontend.

Administrators can manage events using the administration interface.

Supported functionality includes:

* View events
* Create events
* Edit events
* Delete events
* View event details
* Manage event information
* Manage event availability

---

## 👥 User Management

The administration interface provides user management functionality.

Administrators can:

* View users
* Manage user information
* Update users
* Delete users
* Manage user-related information

---

## 🎟️ Booking Management

Users can interact with the booking system through the frontend.

Features include:

* View available events
* Make bookings
* View booking information
* View personal bookings
* Manage booking-related actions

---

## 📋 My Bookings

The **My Bookings** page allows authenticated users to view their booking information.

Users can review:

* Booked events
* Booking details
* Booking status
* Event information

---

# 📄 Frontend Pages

The repository currently contains the following main HTML pages:

| Page                   | Purpose                         |
| ---------------------- | ------------------------------- |
| `index.html`           | Main event browsing/home page   |
| `login.html`           | User authentication             |
| `admin.html`           | Administration dashboard        |
| `user-management.html` | User management                 |
| `booking.html`         | Event booking                   |
| `my-bookings.html`     | User booking history            |
| `shared.css`           | Shared frontend styling         |
| `shared.js`            | Shared JavaScript functionality |

---

# 🎨 UI Design

The frontend uses a shared styling system to maintain a consistent design across the application.

The common styles are maintained in:

```text
shared.css
```

Common JavaScript functionality is maintained in:

```text
shared.js
```

This helps maintain consistency across:

* Navigation
* Buttons
* Forms
* Cards
* Tables
* Authentication handling
* Event interfaces
* Booking interfaces

---

# 🔌 Backend Integration

The frontend communicates with the EventSphere backend through the API Gateway.

```text
Browser
   │
   │ REST API
   ▼
API Gateway :8080
   │
   ├── User Service
   │
   ├── Event Service
   │
   └── Booking Service
```

The frontend should therefore be configured to use the API Gateway URL rather than communicating directly with individual microservices.

### Default Gateway

```text
http://localhost:8080
```

---

# 🔐 JWT Authentication Flow

The authentication flow is based on JWT.

```text
┌──────────────┐
│    User      │
└──────┬───────┘
       │
       │ Login
       ▼
┌──────────────┐
│  Frontend    │
└──────┬───────┘
       │
       │ POST /api/auth/login
       ▼
┌──────────────┐
│ API Gateway  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ User Service │
└──────┬───────┘
       │
       │ JWT
       ▼
┌──────────────┐
│   Frontend   │
└──────────────┘
```

The JWT token is then used for authenticated API requests.

---

# 🗂️ Project Structure

```text
eventsphere-frontend/
│
├── index.html
├── login.html
├── admin.html
├── booking.html
├── my-bookings.html
├── user-management.html
│
├── shared.css
├── shared.js
│
├── nginx.conf
├── Dockerfile
│
└── README.md
```

---

# 🛠️ Technology Stack

| Technology | Purpose               |
| ---------- | --------------------- |
| HTML5      | Page Structure        |
| CSS3       | Styling               |
| JavaScript | Frontend Logic        |
| REST API   | Backend Communication |
| JWT        | Authentication        |
| Nginx      | Web Server            |
| Docker     | Containerization      |

The repository is currently structured as a lightweight HTML/CSS/JavaScript frontend rather than a framework-based frontend application.

---

# ⚙️ Prerequisites

To run the frontend locally, install:

* Git
* Docker
* Docker Compose

For direct development without Docker, a modern web browser and a local HTTP server are recommended.

---

# 📥 Clone the Repository

```bash
git clone https://github.com/SahanRansika/eventsphere-frontend.git
```

Navigate into the project:

```bash
cd eventsphere-frontend
```

---

# ▶️ Running Locally

Because the frontend consists of HTML, CSS, and JavaScript files, it can be served using a local web server.

For example, using Python:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

> Make sure the EventSphere backend and API Gateway are running if you want to use authentication, events, bookings, and user-management functionality.

---

# 🐳 Docker Deployment

The repository includes a `Dockerfile` and `nginx.conf`, allowing the frontend to be served using Nginx inside a Docker container.

### Build Docker Image

```bash
docker build -t eventsphere-frontend .
```

### Run Container

```bash
docker run -d \
  --name eventsphere-frontend \
  -p 80:80 \
  eventsphere-frontend
```

The frontend can then be accessed through:

```text
http://localhost
```

---

# 🔗 Complete EventSphere Project

EventSphere is divided into three main repositories.

### 1. Frontend

This repository:

```text
https://github.com/SahanRansika/eventsphere-frontend
```

Contains:

* User interface
* Authentication pages
* Event management UI
* Booking UI
* User management UI
* Admin dashboard

### 2. Platform

The platform repository contains the infrastructure services:

```text
https://github.com/SahanRansika/eventsphere-platform
```

Includes:

* API Gateway
* Config Server
* Eureka / Discovery Server

### 3. Backend Services

The backend microservices repository contains:

```text
https://github.com/SahanRansika/eventsphere-services
```

Includes:

* User Service
* Event Service
* Booking Service

---

# 🏗️ Complete System Architecture

```text
                    ┌──────────────────────────┐
                    │   EventSphere Frontend   │
                    │                          │
                    │ HTML / CSS / JavaScript  │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       API Gateway        │
                    │          :8080           │
                    └────────────┬─────────────┘
                                 │
             ┌───────────────────┼───────────────────┐
             │                   │                   │
             ▼                   ▼                   ▼
      ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
      │ User        │     │ Event       │     │ Booking     │
      │ Service     │     │ Service     │     │ Service     │
      └──────┬──────┘     └──────┬──────┘     └──────┬──────┘
             │                   │                   │
             ▼                   ▼                   ▼
       PostgreSQL          PostgreSQL             MongoDB
```

Platform infrastructure:

```text
                    ┌────────────────────┐
                    │   Config Server    │
                    │       :8888        │
                    └────────────────────┘

                    ┌────────────────────┐
                    │  Eureka Server     │
                    │       :8761        │
                    └────────────────────┘
```

---

# 🔌 Default URLs

| Component     | URL                     |
| ------------- | ----------------------- |
| Frontend      | `http://localhost`      |
| API Gateway   | `http://localhost:8080` |
| Eureka Server | `http://localhost:8761` |
| Config Server | `http://localhost:8888` |

> Ports may be changed depending on the Docker Compose or deployment configuration.

---

# 🔒 Security

Never commit sensitive credentials to the repository.

Do not expose:

* JWT secrets
* Database passwords
* API keys
* Production credentials
* Private tokens

Frontend configuration should use the appropriate environment/deployment configuration for the target environment.

---

# 🧪 Testing the Frontend

After starting the frontend and backend:

### 1. Open the frontend

```text
http://localhost
```

### 2. Test Login

Navigate to:

```text
login.html
```

### 3. Test Event Management

Verify:

* Event listing
* Event creation
* Event editing
* Event deletion

### 4. Test Booking

Verify:

* Event selection
* Booking creation
* My Bookings

### 5. Test User Management

For administrators, verify:

* User listing
* User updates
* User deletion

---

# 🐛 Troubleshooting

### Frontend loads but API requests fail

Check whether the API Gateway is running:

```bash
docker ps
```

Then check Gateway logs:

```bash
docker logs eventsphere-api-gateway
```

---

### Login returns 503

A `503 Service Unavailable` response usually indicates that the API Gateway cannot reach the required backend service.

Check:

```text
Frontend
   ↓
API Gateway
   ↓
User Service
   ↓
PostgreSQL
```

Verify that all required services are running and registered with Eureka.

---

### Events are not loading

Check:

1. API Gateway
2. Event Service
3. Eureka Server
4. PostgreSQL
5. Browser developer console

---

### Bookings are not working

Check:

1. API Gateway
2. Booking Service
3. Event Service
4. MongoDB
5. JWT authentication

---

# 🚀 Production Deployment

For production deployment, the frontend can be packaged as a Docker image and served through Nginx.

Recommended architecture:

```text
                       Internet
                           │
                           ▼
                    ┌─────────────┐
                    │    Nginx    │
                    │  Frontend   │
                    └──────┬──────┘
                           │
                           ▼
                    API Gateway
                       :8080
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
      User Service    Event Service    Booking Service
```

The frontend can be deployed independently from the backend microservices.

---

# 📌 Related Repositories

| Repository             | Description                         |
| ---------------------- | ----------------------------------- |
| `eventsphere-frontend` | Frontend UI                         |
| `eventsphere-platform` | API Gateway, Config Server & Eureka |
| `eventsphere-services` | User, Event & Booking Microservices |

---

# 🎯 Project Goals

The EventSphere frontend is designed to provide:

* Simple event discovery
* Secure authentication
* Event management
* Booking management
* User management
* Administrator functionality
* Consistent user experience
* Integration with a Spring Cloud microservices backend
* Docker-based deployment

---

# 👨‍💻 Author

**Sahan Ransika**

GitHub:

https://github.com/SahanRansika

---

# 📄 License

This project is developed for educational and academic purposes.
