import { Iuser, IfullUser } from '../database/interfaces/Iuser';

export default class LoginService {
  public static findUser(fullUser: IfullUser): Iuser {
    const { id, username, role, email } = fullUser;
    const publicUser = { id, username, role, email };

    return publicUser;
  }
}
