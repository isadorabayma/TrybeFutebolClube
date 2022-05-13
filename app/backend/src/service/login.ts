import { IpublicUser, Iuser } from '../database/interfaces/Iuser';

export default class LoginService {
  public static findUser(fullUser: Iuser): IpublicUser {
    const { id, username, role, email } = fullUser;
    const publicUser = { id, username, role, email };

    return publicUser;
  }
}
