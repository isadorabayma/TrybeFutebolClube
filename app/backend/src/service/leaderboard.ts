import { IleaderMySQL, IleaderRes } from '../database/interfaces/Ileader';
import LeaderboardRepo from '../repository/leaderboard';

export default class LeaderboardService {
  private static calculatePoints(V:string, E:string): number {
    return 3 * Number(V) + Number(E);
  }

  private static calculateEfficiency(V:string, E:string, J:number): number {
    const points = LeaderboardService.calculatePoints(V, E);
    const efficiency = Math.round(((points / (J * 3)) * 100) * 100) / 100;
    return efficiency;
  }

  private static order(leaderboardList: IleaderRes[]): IleaderRes[] {
    const byGC = leaderboardList.sort((a, b) => {
      if (a.goalsOwn > b.goalsOwn) return 1;
      if (a.goalsOwn < b.goalsOwn) return -1;
      return 0;
    });
    const byGP = byGC.sort((b, a) => {
      if (a.goalsFavor > b.goalsFavor) return 1;
      if (a.goalsFavor < b.goalsFavor) return -1;
      return 0;
    });
    const bySG = byGP.sort((b, a) => {
      if (a.goalsBalance > b.goalsBalance) return 1;
      if (a.goalsBalance < b.goalsBalance) return -1;
      return 0;
    });
    return bySG;
  }

  private static orderTop(leaderboardList: IleaderRes[]): IleaderRes[] {
    const V = leaderboardList.sort((b, a) => {
      if (a.totalVictories > b.totalVictories) return 1;
      if (a.totalVictories < b.totalVictories) return -1;
      return 0;
    });
    const points = V.sort((b, a) => {
      if (a.totalPoints > b.totalPoints) return 1;
      if (a.totalPoints < b.totalPoints) return -1;
      return 0;
    });
    return points;
  }

  private static createTeamObj(leaderMysqlList: IleaderMySQL[]): IleaderRes[] {
    const leaderboardList = leaderMysqlList.map((team) => {
      const { name, J, V, E, D, GP, GC, SG } = team;

      return {
        name,
        totalPoints: LeaderboardService.calculatePoints(V, E),
        totalGames: J,
        totalVictories: Number(V),
        totalDraws: Number(E),
        totalLosses: Number(D),
        goalsFavor: Number(GP),
        goalsOwn: Number(GC),
        goalsBalance: Number(SG),
        efficiency: LeaderboardService.calculateEfficiency(V, E, J),
      };
    });

    return LeaderboardService.orderTop(
      LeaderboardService.order(leaderboardList),
    ) as IleaderRes[];
  }

  public static async getHomeTeams(): Promise<IleaderRes[] | null> {
    const leaderMySQL = await LeaderboardRepo.getHomeTeams();
    if (!leaderMySQL) return null;

    const leaderboardList = LeaderboardService.createTeamObj(leaderMySQL);

    return leaderboardList;
  }

  public static async getAwayTeams(): Promise<IleaderRes[] | null> {
    const leaderMySQL = await LeaderboardRepo.getAwayTeams();
    if (!leaderMySQL) return null;

    const leaderboardList = LeaderboardService.createTeamObj(leaderMySQL);

    return leaderboardList;
  }
}
