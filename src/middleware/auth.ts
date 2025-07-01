import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { verifyToken } from '@/lib/jwt';

export function requireAuth(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    const decoded = verifyToken(token);
    if (!decoded) return res.status(401).json({ error: 'Invalid or expired token..' });
 
    (req as any).user = decoded;
    return handler(req, res);
  };
}

export function requireAdmin(handler: NextApiHandler) {
  return requireAuth((req, res) => {
    const user = (req as any).user;
    if (user.role !== 'admin') return res.status(403).json({ error: 'Admin access only' });
    return handler(req, res);
  });
}
