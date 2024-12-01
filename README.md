# 📝 Tasks Microservice

Task Management Microservice crafted with **TypeScript, Express.js, and MongoDB,** delivering efficient **CRUD** operations through intuitive REST APIs. Designed with scalability in mind, it features a modern, strongly-typed codebase and seamless **MongoDB** integration using Mongoose. The project also includes a fully automated **CI/CD pipeline.**

## 🚀 Features

- 📦 **RESTful API**: Clean and reusable API endpoints.
- 🧩 **Modular Code Structure**: Clean and scalable architecture.
- 📄 **Environment Variables**: Configurable via `.env` file.

---

## 📂 Project Structure
```
├── src 
│ ├── controllers # API controllers 
│ ├── database # API database 
│ │ └── schemas # Mongoose schemas 
│ ├── environment # environments dev and prod 
│ ├── helpers # Helper functions 
│ │ ├── mappers # mappers
│ │ └── utilities # utilities
│ ├── interfaces # interfaces and types
│ ├── middleware # middlewares
│ ├── routes # Express routes 
│ ├── server # Server entry point 
│ │ ├── app.ts # Express app setup 
│ │ └── db.ts # Mongo configuration
│ └── index.ts # App configuration
├── .env # Environment variables 
├── tsconfig.json # TypeScript configuration 
├── package.json # Dependencies and scripts 
└── README.md # Project documentation
```
---
## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aanttrax/ms-tasks.git
   cd ms-tasks
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: Create a .env file in the root directory and add the following:  
   ```javascript
   PORT=3200
   HOST=0.0.0.0
   MONGO_USER=*****
   MONGO_PWD=********
   MONGO_HOST=*******************
   MONGO_DB_NAME=************
   MONGO_OPTIONS=********************
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
---
## 🔗 API Endpoints

1. Alive
    - GET `/alive`
    - Response:
        ```json
        {
         "success": true,
         "response": "Server online"
        }
        ```
2. Create Task
    - POST `/task`
    - Request Body:
        ```json
        {
          "title": "new Task",
          "description": "description of the task"
         }
        ```
    - Response:
        ```json
        {
          "success": true,
          "response": "Task Created"
        }
        ```
3. Get Tasks
    - GET `/task`
    - Response:
        ```json
        {
         "success": true,
         "response": [
            {
              "_id": "674a1d6735166960a3dac662",
              "title": ".......",
              "description": "....",
              "done": false,
            }
         ]
        }
        ```
4. Get Task by Id
    - GET `/task/:taskId`
    - Response:
        ```json
        {
         "success": true,
         "response": 
            {
              "_id": "674a1d6735166960a3dac662",
              "title": ".......",
              "description": "....",
              "done": false,
            }
        }
        ```
5. Update Task
    - PUT `/task/:taskId`
    - Request Body:
        ```json
        {
          "title": "new Task",
          "description": "description of the task",
          "done": true
         }
        ```
    - Response:
        ```json
        {
          "success": true,
          "response": "Task Updated"
        }
        ```
6. Delete Task by Id
    - DELETE `/task/:taskId`
    - Response:
        ```json
        {
         "success": true,
         "response": "Task Deleted"
        }
        ```
---
## 🤝 Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## 🌟 Acknowledgements

- Express.js - Web framework for Node.js.
- TypeScript - Typed JavaScript at any scale.
- MongoDB - Database for modern applications.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

