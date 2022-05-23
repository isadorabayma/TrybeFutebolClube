import { NextFunction, Response, Request } from 'express';
import leaderboardService from '../service/leaderboard';
import ErrorMessages from '../middleware/errorMessages';

export default class LeaderboardController {
  public static async getHomeTeams(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const leaderboardList = await leaderboardService.getHomeTeams();

      if (!leaderboardList) return res.status(401).json({ message: ErrorMessages.wrong() });

      return res.status(200).json(leaderboardList);
    } catch (e) {
      next(e);
    }
  }

  public static async getAwayTeams(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const leaderboardList = await leaderboardService.getAwayTeams();

      if (!leaderboardList) return res.status(401).json({ message: ErrorMessages.wrong() });

      return res.status(200).json(leaderboardList);
    } catch (e) {
      next(e);
    }
  }

  public static async getTeams(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const leaderboardList = await leaderboardService.getTeams();

      if (!leaderboardList) return res.status(401).json({ message: ErrorMessages.wrong() });

      return res.status(200).json(leaderboardList);
    } catch (e) {
      next(e);
    }
  }
}
