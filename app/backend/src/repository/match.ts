import { Imatch } from '../database/interfaces/Imatch';
import Match from '../database/models/Match';
import Team from '../database/models/Team';

export default class MatchRepo {
  public static async getAll(): Promise< Imatch[] | null > {
    const matchList = await Match.findAll(
      {
        include: [
          { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
      },
    );

    if (!matchList) return null;

    return matchList as Imatch[];
  }
}
