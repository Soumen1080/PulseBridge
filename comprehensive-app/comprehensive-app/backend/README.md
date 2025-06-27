# Comprehensive App Backend

## Overview
This backend is built using Node.js and Express.js, with MongoDB as the database. It serves as the API for the comprehensive app, handling user authentication, content sharing, messaging, and notifications.

## Features
- User authentication
- Content sharing between devices
- Real-time messaging
- In-app and system-level notifications

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd comprehensive-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the root of the backend directory and add your MongoDB connection string:
  ```
  MONGODB_URI=<your_mongodb_connection_string>
  ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

### API Endpoints
- **POST /api/auth/login**: User login
- **POST /api/auth/register**: User registration
- **POST /api/share/content**: Share content
- **POST /api/message/send**: Send a message
- **GET /api/notifications**: Get notifications

### Testing
You can use tools like Postman or Insomnia to test the API endpoints.

## Contributing
Feel free to submit issues or pull requests for any improvements or features.

## License
This project is licensed under the MIT License.