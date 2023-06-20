export *  from './rabbitmq';
export * from './events';
export * from './errors';
export * from './middlewares';
export *  from './express';


declare global {
  namespace Express {
   interface Request {
    user: {
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
    }
   }
  }
}