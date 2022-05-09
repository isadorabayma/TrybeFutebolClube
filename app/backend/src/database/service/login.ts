import { Iuser } from '../interfaces/Iuser';
import User from '../models/User';

export default class LoginService {
  static async findUser(email: string): Promise<Iuser> {
    const user = await User.findOne({ where: { email } });
    return user as Iuser;
  }
}
