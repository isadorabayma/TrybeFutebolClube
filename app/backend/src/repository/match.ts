import { Imatch } from '../database/interfaces/Imatch';
import Match from '../database/models/Match';

export default class MatchRepo {
  public static async getAll(): Promise< Imatch[] | null > {
    const matchList = await Match.findAll();

    if (!matchList) return null;

    return matchList as any;
  }
}
