import { NextFunction, Response, Request } from 'express';
import { Iuser } from '../interfaces/Iuser';

export default class LoginController {
  constructor(
    private user: Iuser,
  ) {}

  login = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { email, password } = req.body;

      // const token = await this.authService.authenticate(username, password);
      // if (!token) {
      //     res.status(401).json({message: 'could not authenticate user'});
      //     return;
      // }

      const { user } = this;

      res.status(200).json({ user, token });
    } catch (e) {
      next(e);
    }
  };
}
