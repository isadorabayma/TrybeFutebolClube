import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { Iuser } from '../database/interfaces/Iuser';

const JWT_OPTIONS: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '24h',
};

export default class AuthService {
  private static SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

  public static tokenGenerator(user: Iuser): string {
    // const { password, ...payload } = user;

    return jwt.sign(user, this.SECRET, JWT_OPTIONS);
  }

  public static verify(token: string) {
    const decoded = jwt.verify(token, this.SECRET, { algorithms: ['HS256'] }) as Iuser;
    return decoded;
  }
}
