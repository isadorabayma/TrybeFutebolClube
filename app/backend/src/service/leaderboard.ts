import LeaderboardRepo from '../repository/leaderboard';

export default class LeaderboardService {
  public static async getHomeTeams(): Promise<any> {
    const leaderboardList = await LeaderboardRepo.getHomeTeams();

    if (!leaderboardList) return null;
    return leaderboardList;
  }
}
