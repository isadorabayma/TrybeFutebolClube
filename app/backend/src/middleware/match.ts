import { NextFunction, Response, Request } from 'express';
import TeamRepo from '../repository/team';

export default class MatchMiddleware {
  public static async noDoubleTeams(req: Request, res: Response, next: NextFunction) {
    const reqMatch = req.body;
    const { homeTeam, awayTeam } = reqMatch;

    if (homeTeam === awayTeam) {
      return res.status(401).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }
    next();
  }

  public static async isTeamsinDB(req: Request, res: Response, next: NextFunction) {
    const reqMatch = req.body;
    const { homeTeam, awayTeam } = reqMatch;

    const dbHomeTeam = await TeamRepo.getAllById(homeTeam);
    const dbAwayTeam = await TeamRepo.getAllById(awayTeam);

    if (!dbHomeTeam || !dbAwayTeam) {
      return res.status(401).json({
        message: 'There is no team with such id!',
      });
    }
    next();
  }
}
