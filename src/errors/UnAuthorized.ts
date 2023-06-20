import { HttpError } from "./HttpError";

export class UnAuthorizedException extends HttpError {
  constructor(message: string) {
    super(message || 'UnAuthorizedException', 401);
  }
}