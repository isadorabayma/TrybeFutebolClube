import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import LoginService from './login';

const JWT_OPTIONS: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '24h',
};
// const authConfig = config.auth;

export default class AuthService {
  private static SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

  public static async autenticate(email:string, pass:string): Promise<string | null> {
    const user = await LoginService.findUser(email);
    if (!user || user.password !== pass) return null;

    const { password, ...payload } = user;

    return jwt.sign(payload, this.SECRET, JWT_OPTIONS);
  }

  public static verify(token: string) {
    return jwt.verify(token, this.SECRET, { algorithms: ['HS256'] });
  }
}
