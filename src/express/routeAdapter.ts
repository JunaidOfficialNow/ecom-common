import { Request, Response } from "express";
import { HttpRequest } from "./httpRequest";
import { BaseController } from "./controller.base";

export function expressRouteHandlerAdapter(controller: BaseController) {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      user: req.user,
    };
    const httpResponse = await controller.handle(httpRequest);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body?.message,
      });
    }
  };
}