# Event Management API

A RESTful API for managing events, attendees, and user authentication using Node.js, Express.js, and MongoDB.

## Features

- JWT-based authentication
- Role-based authorization (Admin/User)
- CRUD operations for events
- RSVP system for events
- Event filtering by date/location
- Pagination for events and attendees
- Conflict detection for event schedules

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JSON Web Tokens (JWT)
- Bcrypt.js
- CORS

## Installation

1. **Prerequisites**
   - Node.js (v14+)
   - MongoDB (local instance or Atlas URI)
   - Postman/Thunder Client for testing

2. **Clone repository**
   ```bash
   git clone https://github.com/srj2003/event-management.git
   cd event-management-api