import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(userId: string, role: string) {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
  } catch (error) {
    return null;
  }
}
