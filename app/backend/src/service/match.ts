// import TeamRepo from '../repository/team';
import { Imatch } from '../database/interfaces/Imatch';
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
}

// const xxx = await Promise.all(matchList.map((match) => {
//   const teamById = TeamRepo.getAllById(String(match.homeTeam));
//   return teamById;
// }));

// return xxx as Imatch[];
