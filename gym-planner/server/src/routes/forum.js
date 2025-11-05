import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import ForumPost from '../models/ForumPost.js';

const router = Router();

router.get('/posts', requireAuth(), async (req, res) => {
  const items = await ForumPost.find().sort({ createdAt: -1 }).limit(50);
  res.json({ items });
});

router.post('/posts', requireAuth(), async (req, res) => {
  const created = await ForumPost.create({ ...req.body, authorId: req.user.id });
  res.status(201).json({ item: created });
});

export default router;


