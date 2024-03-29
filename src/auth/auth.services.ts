import { Response, NextFunction } from 'express';
import jwt  from 'jsonwebtoken';

import { UserDocument } from '../api/user/user.model';
import { getUser } from '../api/user/user.services';
import { AuthRequest, Roles } from './auth.types';

const SECRET = process.env.SECRET_TOKEN_APP as string;

export function signToken(payload: any) {
  const token = jwt.sign(
    payload,
    SECRET,
    { expiresIn: '10h' },
  )

  return token;
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET) as UserDocument;

    return decoded;
  } catch (error) {
    return false;
  }
}

export async function isAuthenticated(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers?.authorization?.split(' ')[1];
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'No token' });
  }

  const decoded = verifyToken(token) as UserDocument;

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const user = await getUser({ email: decoded.email });

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  req.user = user;

  next();
  return true;
}

export function hasRole(allowRoles: Roles) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const { role } = req.user as UserDocument;

    if (!allowRoles.includes(role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
    return true;
  }
}
