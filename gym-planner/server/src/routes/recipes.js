import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import Recipe from '../models/Recipe.js';

const router = Router();

router.get('/', requireAuth(), async (req, res) => {
  const items = await Recipe.find().sort({ createdAt: -1 }).limit(50);
  res.json({ items });
});

router.post('/', requireAuth(), async (req, res) => {
  const created = await Recipe.create({ ...req.body, authorId: req.user.id });
  res.status(201).json({ item: created });
});

export default router;


