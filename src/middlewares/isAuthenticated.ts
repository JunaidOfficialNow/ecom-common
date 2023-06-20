import { NextFunction, Request, Response } from "express";
import { UnAuthorizedException } from "../errors";
import jwt from 'jsonwebtoken';

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers?.authorization?.split(' ')[1];
    if (!token) {
      throw new UnAuthorizedException('No authorization header');
    }
    try {
      const decoded = jwt.verify(token, 'your-secret-key') as Express.Request['user']
      req.user = decoded
      next();
    } catch (error) {
      throw new UnAuthorizedException('Invalid token');
    }
    
  } catch (error) {
    console.log('Error while authenticating user');
    throw error;
    
  }

}