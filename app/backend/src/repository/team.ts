import { Iteam } from '../database/interfaces/Iteam';
import Team from '../database/models/Team';

export default class TeamRepo {
  public static async getAll(): Promise< Iteam[] | null > {
    const teamList = await Team.findAll();

    if (!teamList) return null;

    return teamList as Iteam[];
  }

  public static async getAllById(id: string): Promise<Iteam | null> {
    const team = await Team.findOne({ where: { id } });

    if (!team) return null;

    return team as Iteam;
  }
}
