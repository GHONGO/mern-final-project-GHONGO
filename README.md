# 🏋️‍♂️ Gym Workout & Diet Planner

A modern full-stack fitness platform built with the MERN stack.  
Designed to help users create personalized workout routines, plan budget-friendly diets, and interact within a growing fitness community.  
Includes role-based dashboard views, recipe sharing, and real-time chat support (foundation completed).

> **Current Phase:** Core backend + basic dashboards completed. Next phase focuses on UI refinement, analytics, chat UI, and AI workout plan generation.

---

## ✨ Core Features
- 🔐 **Authentication + Role Management**
  - Roles: *User*, *Instructor*, *Admin*
- 🏋️ **Workout Creation & Tracking**
  - Users + Instructors can create structured programs
- 🥗 **Diet Planning**
  - Create meal plans based on goals + budget
- 💬 **Real-Time Chat (Socket.IO)**
  - Room-based messaging groundwork in place
- 🧑‍🤝‍🧑 **Community Forum & Recipe Sharing**
  - Expandable modules for engagement
- 🧱 **Modular Architecture**
  - Designed for scalable feature iteration

---

## 🧠 Architecture Overview
- **Client (React + Vite)**  
  Single-page application consuming secured REST APIs.
- **Server (Node + Express)**  
  API routing, role validation, and Socket.IO messaging.
- **Database (MongoDB + Mongoose)**  
  Models for all core entities: *Users, Workouts, Diets, Recipes, Forum Posts, Messages*.
- **Security**  
  JWT authentication, request validation, CORS + Helmet configuration.

---

## 🛠 Tech Stack
- **Frontend:** React, React Router, Axios, Vite
- **Backend:** Node.js, Express, Socket.IO, Mongoose, JWT, Helmet
- **Database:** MongoDB
- **Testing (Planned):** Jest, Supertest, React Testing Library

---

## 📁 Project Structure
    
    gym-planner/
    │
    ├── client/ # Frontend (React + Vite)
    │ ├── src/
    │ │ ├── App.jsx
    │ │ ├── main.jsx
    │ │ ├── pages/
    │ │ │ ├── DashboardUser.jsx
    │ │ │ ├── DashboardInstructor.jsx
    │ │ │ └── DashboardAdmin.jsx
    │ │ └── services/
    │ │ └── api.js # Axios instance + API utils
    │ ├── index.html
    │ ├── vite.config.js
    │ └── package.json
    │
    ├── server/ # Backend (Node + Express + Socket.IO)
    │ ├── src/
    │ │ ├── server.js # Server bootstrapping
    │ │ ├── app.js # Express app configuration
    │ │ ├── config/
    │ │ │ └── db.js # Database connection
    │ │ ├── middleware/
    │ │ │ └── auth.js # JWT validation middleware
    │ │ ├── models/
    │ │ │ ├── User.js
    │ │ │ ├── Workout.js
    │ │ │ ├── DietPlan.js
    │ │ │ ├── Recipe.js
    │ │ │ ├── ForumPost.js
    │ │ │ └── Message.js
    │ │ └── routes/
    │ │ ├── auth.js
    │ │ ├── users.js
    │ │ ├── workouts.js
    │ │ ├── diets.js
    │ │ ├── recipes.js
    │ │ ├── messages.js
    │ │ └── forum.js
    │ └── package.json
    │
    ├── setup.md
    └── README.md

yaml
Copy code

---

## 🚀 Getting Started

### 1. Create Environment Files
Copy example env files and update values as needed:
server/.env → server/env.example
client/.env → client/env.example

shell
Copy code

### 2. Install Dependencies & Run

Backend
cd server
npm install
npm run dev

Frontend
cd client
npm install
npm run dev

yaml
Copy code

### 3. Access the App locally
- Client UI → http://localhost:5173  
- Backend API Health → http://localhost:5000/api/health

---

## 🧭 Development Workflow
- Create new branches for features: `feat/<feature-name>`
- Keep commits clear and atomic
- Avoid committing `.env` files
- Add comments only where logic isn’t obvious

---

## 🗺️ Roadmap (Planned Enhancements)
- 🤖 AI-powered workout + meal plan generation
- 🎨 Improved dashboard UI themes + charts
- 💬 Fully interactive chat UI with presence + typing indicators
- 💳 Subscription + payment system integration (Stripe)
- 🔔 Push and in-app notifications
- ✅ Full test coverage + CI pipeline

