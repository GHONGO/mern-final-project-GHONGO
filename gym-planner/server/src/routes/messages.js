import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import Message from '../models/Message.js';

const router = Router();

router.get('/:roomId', requireAuth(), async (req, res) => {
  const items = await Message.find({ roomId: req.params.roomId }).sort({ createdAt: 1 });
  res.json({ items });
});

router.post('/:roomId', requireAuth(), async (req, res) => {
  const created = await Message.create({ roomId: req.params.roomId, fromUserId: req.user.id, content: req.body.content });
  res.status(201).json({ item: created });
});

export default router;


