import { IpublicUser } from '../database/interfaces/Iuser';
import LoginRepo from '../repository/login';

export default class LoginService {
  public static async findUser(email: string): Promise<IpublicUser | null> {
    const user = await LoginRepo.findUser(email);
    if (!user) return null;

    const { password, ...publicUser } = user;

    return publicUser as IpublicUser;
  }
}
