import { HttpError } from "./HttpError";

export class ConflictException extends HttpError {
  constructor(message: string) {
    super(message || 'conflict', 409);
  }
}