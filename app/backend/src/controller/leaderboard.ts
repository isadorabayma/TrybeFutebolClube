import { NextFunction, Response, Request } from 'express';
import leaderboardService from '../service/leaderboard';

export default class LeaderboardController {
  public static async getHomeTeams(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const leaderboardList = await leaderboardService.getHomeTeams();

      if (!leaderboardList) return res.status(401).json({ message: 'something wrong' });

      return res.status(200).json(leaderboardList);
    } catch (e) {
      next(e);
    }
  }
}
