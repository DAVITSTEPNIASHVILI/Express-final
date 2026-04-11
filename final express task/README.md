# 📦 Express Final Project

## 🚀 Project Theme

RESTful API built with Node.js and Express.js for managing application
resources through standard HTTP operations (CRUD).

------------------------------------------------------------------------

## 📖 Description of the Resource

This project is a backend API developed using Express.js. It provides
endpoints to handle data operations such as creating, retrieving,
updating, and deleting resources.

The API follows REST principles and demonstrates: - Routing with
Express - Middleware usage - JSON request/response handling - Structured
project organization

------------------------------------------------------------------------

## 🔗 API Endpoints

Base URL: http://localhost:PORT

  Method   Endpoint             Description
  -------- -------------------- --------------------
  GET      /                    Base route
  GET      /api/resources       Get all resources
  GET      /api/resources/:id   Get resource by ID
  POST     /api/resources       Create resource
  PUT      /api/resources/:id   Update resource
  DELETE   /api/resources/:id   Delete resource

------------------------------------------------------------------------

## 📬 Example Requests & Responses

### GET all resources

Request: GET /api/resources

Response: \[ { "id": 1, "name": "Example Resource" }\]

------------------------------------------------------------------------

### GET single resource

Request: GET /api/resources/1

Response: { "id": 1, "name": "Example Resource" }

------------------------------------------------------------------------

### POST create resource

Request: POST /api/resources

Body: { "name": "New Resource" }

Response: { "id": 2, "name": "New Resource" }

------------------------------------------------------------------------

### PUT update resource

Request: PUT /api/resources/1

Body: { "name": "Updated Resource" }

Response: { "id": 1, "name": "Updated Resource" }

------------------------------------------------------------------------

### DELETE resource

Request: DELETE /api/resources/1

Response: { "message": "Resource deleted successfully" }

------------------------------------------------------------------------

## ⚙️ How to Run

npm install npm start

Server runs on http://localhost:PORT

------------------------------------------------------------------------

## 🛠 Technologies

-   Node.js
-   Express.js
