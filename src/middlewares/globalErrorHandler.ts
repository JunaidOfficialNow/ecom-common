import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors";

export function handleGlobalErrors(err: HttpError,req: Request, res: Response, _: NextFunction) {
  res.status(err.status).json({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal server error',
    }
  })
} 