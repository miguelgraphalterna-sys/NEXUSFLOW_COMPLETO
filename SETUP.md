# Setup
## Backend
cd backend && npm install && cp .env.example .env
npx prisma migrate dev && npm run dev

## Frontend
cd frontend && npm install && npm run dev