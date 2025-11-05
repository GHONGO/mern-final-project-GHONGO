# Gym Planner - Setup Guide

This document provides step-by-step instructions to set up and run the Gym Workout & Diet Planner locally.

## 1) Prerequisites
- Node.js 18+ and npm (https://nodejs.org)
- Git (https://git-scm.com)
- MongoDB (local or Atlas)

Check versions:
```bash
node -v
npm -v
```

## 2) Clone the repository
```bash
# Using HTTPS
git clone <your-repo-url> gym-planner
cd gym-planner
```

If you already have the files locally, just `cd` into the project root.

## 3) Environment variables
Environment variables are required both for the server and the client.

- Copy the provided example files:
```bash
# from project root
copy server\env.example server\.env   # Windows PowerShell/cmd
# OR
cp server/env.example server/.env      # macOS/Linux

copy client\env.example client\.env   # Windows PowerShell/cmd
# OR
cp client/env.example client/.env      # macOS/Linux
```

- Edit values as needed.

Recommended defaults:

Server (.env):
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/gym_planner
JWT_SECRET=please_change_me
CLIENT_ORIGIN=http://localhost:5173
OPENAI_API_KEY=
REDIS_URL=
CLOUDINARY_URL=
```

Client (.env):
```
VITE_API_BASE_URL=http://localhost:5000/api
```

Notes:
- `MONGO_URI` can point to MongoDB Atlas instead of local MongoDB.
- `JWT_SECRET` must be a strong, unique value in production.

## 4) Install dependencies
Open two terminals or run these sequentially.

Server:
```bash
cd server
npm install
```

Client:
```bash
cd client
npm install
```

## 5) Start the apps
Start MongoDB locally if not already running.

Server (Terminal A):
```bash
cd server
npm run dev
```
The server should start on http://localhost:5000 and expose REST endpoints under `/api`.

Client (Terminal B):
```bash
cd client
npm run dev
```
The Vite dev server will start (default http://localhost:5173).

## 6) Quick health check
Open the client in your browser: http://localhost:5173
- The User Dashboard shows API health status.

Or hit the API directly:
```bash
curl http://localhost:5000/api/health
# -> { "status": "ok" }
```

## 7) Basic API walkthrough
Auth:
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"secret123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"secret123"}'
# Save the returned token as TOKEN
```

Authorized requests (replace $TOKEN):
```bash
# Profile
curl http://localhost:5000/api/users/profile -H "Authorization: Bearer $TOKEN"

# Workouts list
curl http://localhost:5000/api/workouts -H "Authorization: Bearer $TOKEN"
```

## 8) Project structure (high level)
```
client/
  index.html
  package.json
  vite.config.js
  src/
    App.jsx
    main.jsx
    pages/
      DashboardAdmin.jsx
      DashboardInstructor.jsx
      DashboardUser.jsx
    services/
      api.js
server/
  package.json
  src/
    app.js
    server.js
    config/db.js
    middleware/auth.js
    models/
      DietPlan.js
      ForumPost.js
      Message.js
      Recipe.js
      User.js
      Workout.js
    routes/
      auth.js
      diets.js
      forum.js
      messages.js
      recipes.js
      users.js
      workouts.js
```

## 9) Common issues & fixes
- CORS errors: Ensure `CLIENT_ORIGIN` in `server/.env` matches your client URL (e.g., http://localhost:5173). Restart the server after changes.
- Cannot connect to MongoDB: Verify MongoDB is running and `MONGO_URI` is correct. For Atlas, ensure your IP is whitelisted and credentials are correct.
- 401 Unauthorized: Use a valid JWT token in the `Authorization: Bearer <token>` header.
- Port already in use: Change `PORT` in `server/.env` or stop the process using that port.

## 10) Production notes (brief)
- Use environment variables for all secrets; never commit `.env`.
- Build the client and serve it behind a CDN or static hosting.
- Run the Node server behind a process manager (PM2) or as a service.
- Use a managed MongoDB (e.g., Atlas) with backups and proper indexes.
- Configure HTTPS and security headers.

## 11) Scripts reference
Server:
- `npm run dev` – start server with nodemon
- `npm start` – start server with node

Client:
- `npm run dev` – Vite dev server
- `npm run build` – production build
- `npm run preview` – preview production build

## 12) Next steps
- Wire up full chat UI using `socket.io-client` on the frontend.
- Implement role-based UI flows (user/instructor/admin) and protected routes.
- Add validations, analytics, and optional third-party integrations.

---
If you encounter setup issues, share your OS, Node version, and console logs to diagnose quickly.

