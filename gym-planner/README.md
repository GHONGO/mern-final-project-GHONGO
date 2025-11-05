Gym Workout & Diet Planner

Modern MERN application for personalized workout programming, budget-aware diet planning, and a supportive fitness community. Includes role-based dashboards (User, Instructor, Admin), real-time chat, recipes, and forum scaffolding.

Status: Foundation implemented (backend API, DB models, auth, basic UI). Ready for iterative feature growth (analytics, payments, AI integrations).

Table of Contents
- Features
- Architecture Overview
- Tech Stack
- Project Structure
- Quick Start
- Environment Variables
- NPM Scripts
- API Overview
- Development Workflow
- Testing (recommended approach)
- Troubleshooting
- Security Notes
- Deployment Guide (high level)
- Roadmap (next steps)
- Contributing
- License

Features
- Authentication & RBAC: JWT-based auth with roles `user`, `instructor`, `admin`.
- Core Entities: Users, Workouts, Diet Plans, Forum Posts, Messages, Recipes.
- Real-time Chat: Socket.IO wiring with room-based messaging (client hookup pending).
- Community: Forum and recipe endpoints ready for expansion.
- Frontend: React + Vite app with three dashboard placeholders and health check.

Architecture Overview
- Client: React SPA (Vite) consuming REST APIs; future socket.io-client integration for chat.
- Server: Express API + Socket.IO, layered routing, middleware, and Mongoose models.
- Database: MongoDB via Mongoose. Schemas for user, workout, diet, message, recipe, forum.
- Security: JWT auth middleware, Helmet, CORS configured via env.

Tech Stack
- Frontend: React 18, React Router, Axios, Vite
- Backend: Node 18, Express, Mongoose, Socket.IO, JWT, Helmet, CORS, Morgan
- Database: MongoDB
- Testing (planned): Jest, Supertest, React Testing Library

Project Structure
```
gym-planner/
  .gitignore
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
    env.example
  server/
    package.json
    src/
      app.js
      server.js
      config/
        db.js
      middleware/
        auth.js
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
    env.example
  setup.md
  README.md
```

Quick Start
1) Copy env examples
```
# from project root
copy server\env.example server\.env   # Windows
cp server/env.example server/.env      # macOS/Linux

copy client\env.example client\.env   # Windows
cp client/env.example client/.env      # macOS/Linux
```

2) Install and run (two terminals)
```
# Terminal A - Server
cd server
npm install
npm run dev

# Terminal B - Client
cd client
npm install
npm run dev
```

3) Verify
- Open client: http://localhost:5173
- API health: GET http://localhost:5000/api/health -> { "status": "ok" }

Environment Variables
- Example files are included and should be copied:
  - server/env.example -> server/.env
  - client/env.example -> client/.env

Server (.env)
- PORT=5000
- MONGO_URI=mongodb://127.0.0.1:27017/gym_planner
- JWT_SECRET=change_me
- CLIENT_ORIGIN=http://localhost:5173
- OPENAI_API_KEY=
- REDIS_URL=
- CLOUDINARY_URL=

Client (.env)
- VITE_API_BASE_URL=http://localhost:5000/api

NPM Scripts
- Server
  - `npm run dev`: Start server with nodemon
  - `npm start`: Start server with node
  - `npm run lint` (placeholder): Lint server code if configured
- Client
  - `npm run dev`: Vite dev server
  - `npm run build`: Production build
  - `npm run preview`: Preview production build

API Overview
- Health
  - GET `/api/health` → `{ status: "ok" }`
- Auth
  - POST `/api/auth/register` → create user
  - POST `/api/auth/login` → JWT token
  - GET `/api/auth/me` → current user (Bearer token)
- Users
  - GET `/api/users/profile` → current user profile (Bearer token)
- Workouts
  - GET/POST `/api/workouts` → list/create
  - PUT/DELETE `/api/workouts/:id` → update/delete
- Diets
  - GET/POST `/api/diets`
  - PUT/DELETE `/api/diets/:id`
- Messages
  - GET/POST `/api/messages/:roomId`
- Recipes
  - GET/POST `/api/recipes`
- Forum
  - GET/POST `/api/forum/posts`

Development Workflow
- Branching: create feature branches off main for new modules (e.g., `feat/ai-planner`).
- Commits: small, descriptive messages (e.g., "add Workout CRUD validations").
- Env: keep `.env` out of VCS; use example files.
- Code style: prefer readable code with clear names; add concise comments for non-obvious logic.

Testing (recommended approach)
- Backend: Jest + Supertest for route and controller tests; test Mongo via in-memory server or isolated test DB.
- Frontend: React Testing Library for components; Cypress (optional) for E2E.

Troubleshooting
- CORS: Ensure `CLIENT_ORIGIN` matches client URL; restart server after edits.
- MongoDB: Verify service is running; confirm `MONGO_URI` (Atlas users: whitelist IPs and set credentials).
- Auth 401: Ensure Authorization header `Bearer <token>` is present and token is valid.
- Port in use: Change `PORT` in server `.env` or free the port.

Security Notes
- Use strong `JWT_SECRET` in production; rotate secrets periodically.
- Validate and sanitize request payloads (express-validator already included; expand coverage).
- Store passwords as hashes only (bcrypt is used).
- Restrict CORS origins per environment.

Deployment Guide (high level)
- Backend
  - Provide production `.env` secrets via the platform (no commits).
  - Run with a process manager (PM2) or managed environment (Railway/Render/AWS/Heroku).
  - Use MongoDB Atlas; configure indexes and backups.
- Frontend
  - Build with `npm run build`; deploy `dist/` to Netlify/Vercel/S3+CloudFront.
- Observability
  - Add logging/monitoring (e.g., pino + APM) and error tracking (Sentry).

Roadmap (next steps)
- AI plan generation (OpenAI or custom model) based on goals, equipment, time, budget.
- Real-time chat UI; typing indicators, read receipts, media uploads.
- Role-specific dashboards with analytics and instructor tools.
- Community features: moderation, tagging, advanced search and filters.
- Payments and subscriptions; Stripe integration and tiered access.
- Notifications (email, in-app, push) and preferences.
- Comprehensive test coverage and CI/CD pipeline.

Contributing
- Issues and PRs are welcome. Please:
  - Discuss large changes first via an issue.
  - Keep PRs focused and well-tested.
  - Follow project code style and lint rules.

License
- Proprietary or choose a license (MIT/Apache-2.0). Add a `LICENSE` file if open-sourcing.