import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import DietPlan from '../models/DietPlan.js';

const router = Router();

router.get('/', requireAuth(), async (req, res) => {
  const items = await DietPlan.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json({ items });
});

router.post('/', requireAuth(), async (req, res) => {
  const created = await DietPlan.create({ ...req.body, userId: req.user.id });
  res.status(201).json({ item: created });
});

router.put('/:id', requireAuth(), async (req, res) => {
  const updated = await DietPlan.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json({ item: updated });
});

router.delete('/:id', requireAuth(), async (req, res) => {
  await DietPlan.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.status(204).send();
});

export default router;


