import { Iuser } from '../database/interfaces/Iuser';
import User from '../database/models/User';

export default class LoginService {
  public static async findUser(email: string): Promise<Iuser> {
    const user = await User.findOne({ where: { email } });
    return user as Iuser;
  }
}
