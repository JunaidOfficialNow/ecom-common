import {Request, Response, NextFunction} from 'express';
import { ForbiddenException } from '../errors';

export function isAdmin(req: Request, res: Response,  next: NextFunction) {
  try {
    if (req.user.isAdmin) next();
    else throw new ForbiddenException('You are not allowed to access this route');
  } catch (error) {
    throw error;
  }
}