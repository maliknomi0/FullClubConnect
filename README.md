# FullClubConnect

FullClubConnect is a full stack event management platform for university clubs. It consists of a React frontend and an Express/MongoDB backend. Users can create events, register teams, like posts and provide feedback.

## Directory Structure

- `backend/` – REST API built with Express and MongoDB
- `Frontend/` – Vite + React client

## Backend Features

- JWT based authentication
- CRUD endpoints for events with image uploads to Cloudinary
- Event registration and feedback collection
- Like/unlike functionality with ranking of top liked events

### Running the Backend

```bash
cd backend
npm install
```
Create an `.env` file with:
```
MONGO_URL=<your mongodb connection>
JWT_SECRET=<your jwt secret>
CLOUDINARY_CLOUD_NAME=<cloudinary name>
CLOUDINARY_API_KEY=<cloudinary key>
CLOUDINARY_API_SECRET=<cloudinary secret>
```
Then start the server:
```bash
npm run dev
```
The API will be available at `http://localhost:5000/api/v1` by default.

## Frontend Features

- Event feed with likes and comments
- Trending events page
- Event creation form
- User login/register pages
- Chat interface and payment integration using Razorpay
- AI powered suggestions using the Gemini API

### Running the Frontend

```bash
cd Frontend
npm install
```
Create a `.env` file with:
```
VITE_API_BASE_URL=http://localhost:5000/api/v1
```
Then start the development server:
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

## Contributors

- Original author: Iqbal
- Developer: Noman Tariq <dev.nomantariq@gmail.com>
