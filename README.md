# Notes App — Backend
This is the backend for a simple notes-taking application, built with Node.js, Express, PostgreSQL, and Prisma ORM. The project is deployed to Heroku and uses Supabase as the PostgreSQL provider.

## 🚀 Quick Start
1. Clone the repository
```bash
git clone https://github.com/Keenlyia/notes-app-server.git
cd notes-app-server
```
2. Install dependencies
```bash
npm install
```
3. Set up environment variables
Create a .env file in the root of the project and add your configuration:
```bash
DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DB_NAME>?pgbouncer=true"
```
4. Sync Prisma schema with your database
```bash
npx prisma db push
```
5. Start the server
```bash
npm start
```
## 📁 API Endpoints
- GET /notes
- POST /notes
- PUT /notes/:id
- DELETE /notes/:id
