import { NextFunction, Response, Request } from 'express';
import LoginService from '../service/login';

export default class LoginController {
  constructor(
    public atribut: string,
  ) {}

  public static async login(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const { email } = req.body;
      // const { email, password } = req.body;

      const user = await LoginService.findUser(email);

      // const token = await this.authService.authenticate(username, password);
      // if (!token) {
      //     res.status(401).json({message: 'could not authenticate user'});
      //     return;
      // }

      return res.status(200).json({ user });
      // return res.status(200).json({ user, token });
    } catch (e) {
      next(e);
    }
  }

  public log(): void {
    console.log(this.atribut);
  }
}
