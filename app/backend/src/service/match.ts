import { Imatch } from '../database/interfaces/Imatch';
import MatchRepo from '../repository/match';

export default class LoginService {
  public static async getAll(): Promise< Imatch[] | null > {
    const matchList = await MatchRepo.getAll();

    return matchList;
  }
}
