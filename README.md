# API Testing Server

A RESTful API server with comprehensive testing including unit, integration, and API tests.

![Test Coverage](coverage-screenshot.png)

## Features

- CRUD operations for users
- Comprehensive test suite
- 70%+ test coverage
- In-memory database for testing

## Tech Stack

- Node.js
- Express
- MongoDB (with Mongoose)
- Jest (testing framework)
- Supertest (API testing)
- MongoDB Memory Server (for testing)

## API Endpoints

- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get a user by ID
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Installation

```bash
git clone https://github.com/yourusername/api-testing-server.git
cd api-testing-server
npm install
