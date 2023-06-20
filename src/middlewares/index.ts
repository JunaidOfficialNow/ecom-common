import { handleUrlNotFound } from "./NotFound";
import { handleGlobalErrors } from "./globalErrorHandler";
import { isAdmin } from "./isAdmin";
import { isAuthenticated } from "./isAuthenticated";

export {
  isAuthenticated,
  isAdmin,
  handleGlobalErrors,
  handleUrlNotFound,
}