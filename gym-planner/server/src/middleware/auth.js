import jwt from 'jsonwebtoken';

export function requireAuth(roles = []) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret');
      if (roles.length && !roles.includes(payload.role)) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.user = payload;
      return next();
    } catch (e) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}


