import { NextFunction, Response, Request } from 'express';
import * as bcrypt from 'bcryptjs';
import LoginService from '../service/login';
import LoginRepo from '../repository/login';
import AuthService from '../middleware/auth';

export default class LoginController {
  public static async login(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const { email, password } = req.body;

      const fullUser = await LoginRepo.findUser(email);
      if (!fullUser || !(bcrypt.compareSync(password, fullUser.password))) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }

      const token = AuthService.tokenGenerator(fullUser);

      const user = LoginService.findUser(fullUser);

      return res.status(200).json({ user, token });
    } catch (e) {
      next(e);
    }
  }

  public static async getRole(req: Request, res: Response, next: NextFunction) : Promise<
  Response | void> {
    try {
      const token = req.headers.authorization;

      if (!token) return res.status(401).json({ message: 'Token not found' });

      const decoded = AuthService.verify(token);

      return res.status(200).json(decoded);
    } catch (e) {
      next(e);
    }
  }
}
