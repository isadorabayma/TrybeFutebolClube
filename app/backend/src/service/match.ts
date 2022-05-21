import { Imatch, IreqMatch } from '../database/interfaces/Imatch';
import MatchRepo from '../repository/match';

export default class MatchService {
  public static async getAll(): Promise< Imatch[] | null > {
    const matchList = await MatchRepo.getAll();

    if (!matchList) return null;
    return matchList;
  }

  public static async getAllFilter(value: boolean): Promise< Imatch[] | null > {
    const matchList = await MatchRepo.getAllFilter(value);

    if (!matchList) return null;
    return matchList;
  }

  public static async create(reqMatch: IreqMatch): Promise< Imatch | null > {
    const matchList = await MatchRepo.create(reqMatch);

    if (!matchList) return null;
    return matchList;
  }

  public static async finishMatch(id: string): Promise< void > {
    const idNumber = parseInt(id, 10);
    // console.log('service', idNumber);
    await MatchRepo.finishMatch(idNumber);
  }
}
