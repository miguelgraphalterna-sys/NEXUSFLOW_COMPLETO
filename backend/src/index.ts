import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', timezone: 'EST', currency: 'USD' });
});

app.listen(PORT, () => {
  console.log('✅ NexusFlow Backend: http://localhost:' + PORT);
});

export default app;