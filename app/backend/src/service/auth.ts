import jwt, { SignOptions } from 'jsonwebtoken';
import LoginService from './login';

const SECRET = 'senhasecreta';
const JWT_OPTIONS: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};
// const authConfig = config.auth;

export default class AuthService {
  public static async autenticate(email:string, pass:string): Promise<string | null> {
    const user = await LoginService.findUser(email);
    if (!user || user.password !== pass) return null;

    const { password, ...payload } = user;

    // return jwt.sign(
    //   payload,
    //   authConfig.secret,
    //   authConfig.options as SignOptions,
    // );
    return jwt.sign(payload, SECRET, JWT_OPTIONS);
  }
}
