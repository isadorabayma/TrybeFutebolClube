import { NextFunction, Response, Request } from 'express';
import ErrorMessages from './errorMessages';

export default class LoginMiddleware {
  public static emailVal(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    if (email === undefined) {
      console.log('email undefined');
      return res.status(400).json({ message: ErrorMessages.isEmpty() });
    }

    if (email === '') {
      console.log('email empty');
      return res.status(400).json({ message: ErrorMessages.isEmpty() });
    }

    if (!email.match(/\S+@\S+\.\S+/)) {
      console.log('email incorrect');
      return res.status(401)
        .json({ message: 'Incorrect email or password' });
    }

    console.log('emailVal ok');
    next();
  }

  public static passVal(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;
    const passMessages = new ErrorMessages('password', 6);

    if (password === undefined) {
      console.log('pass undefined');
      return res.status(400).json({ message: ErrorMessages.isEmpty() });
    }

    if (password === '') {
      console.log('pass empty');
      return res.status(400).json({ message: ErrorMessages.isEmpty() });
    }

    if (password.length < 6) {
      console.log('pass incorrect');
      console.log(passMessages.minLength());
      return res.status(401).json({ message: passMessages.minLength() });
    }

    console.log('passVal ok');

    next();
  }
}
