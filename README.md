# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ✅ Todo Application

A full-stack task management application built with the **MERN stack** (MongoDB, Express, React, Node.js). Organize your daily tasks, track progress, and stay productive with a clean, intuitive interface.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Project Overview

The Todo Application is a modern, responsive task manager that allows users to create, manage, and track tasks through their lifecycle. Each task displays its current status — **Pending** or **Completed** — giving you a clear snapshot of your progress at a glance.

Whether you're tracking project milestones like *"Complete and get project reviewed"*, personal goals like *"Workout 10k steps"*, or learning objectives like *"Learn Node.js"*, this app keeps everything organized in one place.

---

## ✨ Features

- **Create Tasks** — Add new tasks with a title and description
- **Status Tracking** — Tasks display as *Pending* or *Completed*
- **Update Tasks** — Edit task details or mark tasks as complete
- **Delete Tasks** — Remove tasks you no longer need
- **Responsive UI** — Clean, modern interface built with React
- **RESTful API** — Well-structured backend API for all CRUD operations
- **Persistent Storage** — All tasks are stored in MongoDB for data persistence

---

## 🛠️ Technologies Used

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React, HTML5, CSS3, JavaScript    |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB, Mongoose                 |
| Tools      | npm, Git                          |

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas connection string)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app


Install backend dependencies:
cd server
npm install


Install frontend dependencies:
cd ../client
npm install


Configure environment variables:
Create a .env file in the server directory:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp


Start the application
Start the backend server:
cd server
npm start


In a separate terminal, start the React frontend:
cd client
npm start


Open in your browser:
Navigate to http://localhost:3000 to view the application.

### Usage
- Add a Task — Use the input form to create a new task. It will appear with a Pending status.
- Complete a Task — Click the complete button to mark a task as Completed.
- Edit a Task — Update the task title or details as needed.
- Delete a Task — Remove a task from your list when it's no longer needed.

### API Endpoints
|Method	|Endpoint	    |Description             |
|.................................................|
|GET	   /api/todos	    Retrieve all tasks       |
|POST	   /api/todos	    Create a new task        |
|PUT	   /api/todos/:id	 Update an existing task  |
|DELETE	/api/todos/:id	 Delete a task            |

🤝 Contributions are welcome!