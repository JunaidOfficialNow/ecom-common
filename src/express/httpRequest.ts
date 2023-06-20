export type HttpRequest<TBody = any, TParams = any, THeaders = any> = {
  body?: TBody;
  params?: TParams;
  headers?: THeaders;
  user?: {
    _id: string,
    email: string,
    name: string,
    isAdmin: boolean,
  };
};
