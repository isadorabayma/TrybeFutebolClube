import { NextFunction, Response, Request } from 'express';
import LoginService from '../service/login';

export default class LoginController {
  constructor(
    private loginService: LoginService,
  ) {}

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;

      const user = await this.loginService.findUser(email);

      // const token = await this.authService.authenticate(username, password);
      // if (!token) {
      //     res.status(401).json({message: 'could not authenticate user'});
      //     return;
      // }

      res.status(200).json({ user, token });
    } catch (e) {
      next(e);
    }
  };
}
