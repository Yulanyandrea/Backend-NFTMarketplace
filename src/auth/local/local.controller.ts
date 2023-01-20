import { Request, Response, NextFunction } from 'express';

import { getUser } from '../../api/user/user.services';
import { signToken } from '../auth.services';


export async function handleLoginUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const user = await getUser({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    const validPassword = await user.comparePassword(password)

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const payload = user.userProfile

    //Generate JWT
    const token = signToken(payload);

    return res.status(200).json({ profile: user, token });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}
