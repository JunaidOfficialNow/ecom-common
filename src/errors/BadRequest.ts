import { HttpError } from "./HttpError";

export class BadRequestException extends HttpError {
  constructor(message: string) {
    super(message || 'bad request', 400);
  }
}