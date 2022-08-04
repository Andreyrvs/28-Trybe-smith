import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import HttpStatus from '../enums/HttpStatus';

// eslint-disable-next-line max-len
const errorHandler:ErrorRequestHandler = async (err, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'NotFoundError':
      res.status(HttpStatus.BAD_REQUEST).json({ message: details[0].message });
      break;
    default:
      res.status(HttpStatus.INTERNAL_ERROR).json({ message });
  }
  next();
};

export default errorHandler;