import { IpublicUser } from '../database/interfaces/Iuser';
import User from '../database/models/User';

export default class LoginService {
  public static async findUser(email: string): Promise<IpublicUser | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) return null;

    const { password, ...publicUser } = user;
    return publicUser as IpublicUser;
  }
}
