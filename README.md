NoteKeeper – Full Stack Notes Application

A full-stack Note Keeper web application that allows users to sign up, log in, create, edit, delete, search, and pin notes securely.

Live Demo

Frontend (Live App):
https://notekeeper-frontend.onrender.com

Backend (API):
https://notekeeper-backend-0wf7.onrender.com

Features
User Authentication (Sign Up & Login using JWT)
Create, Edit, Delete Notes
Pin / Unpin Notes
Search Notes
Secure API with Token Authentication
Logout functionality
Responsive UI

Tech Stack
Frontend
React (Vite)
React Router DOM
Axios
CSS

Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcrypt.js

Deployment
Frontend: Render
Backend: Render
Database: MongoDB Atlas

Project Structure
NoteKeeper/
│
├── frontend/
│   └── note-keeper/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── utils/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── vite.config.js
│       └── package.json
│
├── backend/
│   ├── models/
│   ├── index.js
│   ├── config.json
│   └── package.json
│
└── README.md

Environment Variables
Backend .env
ACCESS_TOKEN_SECRET=your_jwt_secret

MongoDB

MongoDB Atlas connection string is stored in config.json.

How to Run Locally
Backend
cd backend
npm install
node index.js


Backend runs on:

http://localhost:8000

Frontend
cd frontend/note-keeper
npm install
npm run dev

Frontend runs on:
http://localhost:5173

Authentication Flow
JWT token is stored in localStorage
Axios interceptor automatically attaches token
Protected routes redirect to /login if token is missing
Logout clears token and redirects to login

API Endpoints (Backend)
Method	Endpoint	Description
POST	/create-account	Register user
POST	/login	Login user
GET	/get-user	Get user info
POST	/add-note	Add note
GET	/get-all-notes	Fetch notes
PUT	/edit-note/:id	Edit note
DELETE	/delete-note/:id	Delete note
PUT	/update-note-pinned/:id	Pin/unpin note
GET	/search-notes	Search notes

Deployment Details
Frontend built using vite build
Backend deployed as Node service on Render
CORS enabled for frontend-backend communication

Author
Anuradha Sarode
MCA Student | Full Stack Developer
GitHub: https://github.com/AnuradhaAS

Status
 Project Completed
 Deployed Successfully
 Working Authentication & CRUD
