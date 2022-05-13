import { NextFunction, Response, Request } from 'express';
import ErrorMessages from './errorMessages';

export default class LoginMiddleware {
  public static emailVal(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const emailMessages = new ErrorMessages('email');

    if (email === undefined) {
      return res.status(400).json({ message: ErrorMessages.isRequired });
    }

    if (email === '') {
      return res.status(401).json({ message: emailMessages.isEmpty });
    }

    if (!email.match(/\S+@\S+\.\S+/)) {
      return res.status(401)
        .json({ message: 'Incorrect email or password' });
    }

    next();
  }

  public static passVal(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;
    const passMessages = new ErrorMessages('password');

    if (password === undefined) {
      return res.status(400).json({ message: ErrorMessages.isRequired });
    }

    if (password === '') {
      return res.status(401).json({ message: passMessages.isEmpty });
    }

    next();
  }
}
