import { NextFunction, Request, Response } from "express";

export function handleUrlNotFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ error: {
    status: 404,
    message: `Cannot get /${req.url}`
  }})
}