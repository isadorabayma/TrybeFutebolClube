import { NextFunction, Response, Request } from 'express';
import LoginService from '../service/login';
import AuthService from '../service/auth';

export default class LoginController {
  public static async login(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const { email, password } = req.body;

      const user = await LoginService.findUser(email);

      const token = await AuthService.authenticate(email, password);
      if (!token) {
        res.status(401).json({ message: 'could not authenticate user' });
        return;
      }

      return res.status(200).json({ user, token });
    } catch (e) {
      next(e);
    }
  }
}
