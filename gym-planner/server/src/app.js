import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import workoutRoutes from './routes/workouts.js';
import dietRoutes from './routes/diets.js';
import messageRoutes from './routes/messages.js';
import recipeRoutes from './routes/recipes.js';
import forumRoutes from './routes/forum.js';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/diets', dietRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/forum', forumRoutes);

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

export default app;


