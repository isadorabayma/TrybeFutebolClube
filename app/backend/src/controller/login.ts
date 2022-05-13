import { NextFunction, Response, Request } from 'express';
import LoginService from '../service/login';
import LoginRepo from '../repository/login';
import AuthService from '../middleware/auth';

export default class LoginController {
  public static async login(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const { email, password } = req.body;

      const fullUser = await LoginRepo.findUser(email);
      if (!fullUser) {
        res.status(401).json({ message: 'Incorrect email or password' });
        return;
      }

      const token = await AuthService.authenticate(password, fullUser);
      if (!token) {
        res.status(401).json({ message: 'Incorrect email or password' });
        return;
      }

      const user = LoginService.findUser(fullUser);

      return res.status(200).json({ user, token });
    } catch (e) {
      next(e);
    }
  }
}
