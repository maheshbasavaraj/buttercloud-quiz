import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET; // Get from .env

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // No token

  if (!JWT_SECRET) {
    console.error('JWT_SECRET is not defined in authenticateToken middleware');
    return res.sendStatus(500); // Internal Server Error
  }

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403); // Invalid token
    (req as any).user = user; // Attach user payload to request
    next();
  });
};
