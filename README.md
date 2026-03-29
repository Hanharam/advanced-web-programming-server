# Advanced Web Programming - Node.js Web Server

## 📌 Project Introduction
This repository is dedicated to my coursework and projects for **Advanced Web Programming**. 

*Note: This README will be continuously updated as I progress through the course assignments.*

---

## 📝 Assignments

### Assignment #1 (Part-A): Server Initialization & Custom Logging
- **Goal:** Clone a base Node.js web server, run it locally, and modify the code to output a personal identifier to the console.
- **Achievement:** - Successfully cloned the repository and installed necessary dependencies via `npm install`.
  - Injected a custom `console.log("hanharam")` statement into the main server logic. 
  - Verified the local development environment by confirming that my nickname is actively logged to the terminal whenever the server is executed and accessed.
  <img width="236" height="36" alt="image" src="https://github.com/user-attachments/assets/f55b60ed-9fbf-4912-bed1-a97488b8a359" />

### Assignment #2: Student REST API Implementation (Routing & Controllers)
- **Goal:** Build a RESTful API to manage student data by structuring the application with modular routes and controller functions.
- **Achievement:** - Successfully separated application logic using an MVC-like architecture (Routes, Controllers, Models, and Data).
  - Configured `express.Router()` in `studentRoutes.js` to create modular route handlers.
  - Implemented core API endpoints in `studentController.js` to handle the following operations:
    - **Retrieve Data:** `GET /` to fetch all students, and `GET /:id` to find a specific student by their unique ID.
    - **Add Data:** `POST /` to create and store a new student record using data parsed from the request body (`req.body`).
    - **Delete Data:** `DELETE /:id` to remove a specific student from the dataset.
  - Added basic error handling, such as returning a `404 Not Found` HTTP status code when attempting to fetch or delete a non-existent student ID.
