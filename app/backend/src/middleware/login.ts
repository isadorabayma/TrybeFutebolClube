import { NextFunction, Response, Request } from 'express';
import ErrorMessages from './errorMessages';

export default class EmailMiddleware {
  public static Validate(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const emailMessages = new ErrorMessages('email');

    if (email === undefined) {
      return res.status(400).json({ message: emailMessages.isRequired });
    }

    if (email === '') {
      return res.status(400).json({ message: emailMessages.isEmpty });
    }

    if (!email.match(/\S+@\S+\.\S+/)) {
      return res.status(400)
        .json({ message: 'Incorrect email or password' });
    }

    next();
  }
}
