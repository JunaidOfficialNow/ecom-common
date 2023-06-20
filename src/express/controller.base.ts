import { BadRequestException } from "../errors";
import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { Validation } from "./validation";

export abstract class BaseController {
  constructor(private readonly validation?: Validation) {}

  abstract execute(httpRequest: HttpRequest): Promise<HttpResponse>;

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation?.validate(httpRequest);
      if (error) {
        // return badRequest(error);
        throw new BadRequestException(error.message);
      }
      return await this.execute(httpRequest);
    } catch (error) {
      throw  error;
    }
  }
}
