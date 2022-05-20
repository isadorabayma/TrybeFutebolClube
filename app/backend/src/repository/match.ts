import { Imatch, IreqMatch } from '../database/interfaces/Imatch';
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

  public static async getAllFilter(value: boolean): Promise< Imatch[] | null > {
    const matchList = await Match.findAll(
      {
        include: [
          { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
        where: {
          inProgress: value,
        },
      },
    );

    if (!matchList) return null;

    return matchList as Imatch[];
  }

  public static async create(reqMatch: IreqMatch): Promise<Imatch | null> {
    const matchCreated = await Match.create(reqMatch);
    return matchCreated as Imatch;
  }

  public static async finishMatch(id: number): Promise<void> {
    const match = await Match.create({ id });
    match.inProgress = false;
    await match.save();
  }
}
