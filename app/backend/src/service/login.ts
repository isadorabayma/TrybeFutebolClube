import { Iuser } from '../database/interfaces/Iuser';

export default class LoginService {
  constructor(
    private userModel : any,
  ) {}

  public static async findUser(email: string): Promise<Iuser> {
    const user = await this.
    // const user = await this.user.findOne({ where: { email } });
    return user as Iuser;
  }
}

