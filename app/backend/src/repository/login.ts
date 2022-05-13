import { Iuser } from '../database/interfaces/Iuser';
import User from '../database/models/User';

export default class LoginRepo {
  public static async findUser(email: string): Promise<Iuser | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) return null;

    return user as Iuser;
  }
}
