import { NextFunction, Response, Request } from 'express';
import MatchService from '../service/match';

export default class MatchController {
  public static async getAll(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const queryValue = req.query.inProgress;
      if (!queryValue) {
        const matchList = await MatchService.getAll();
        return res.status(200).json(matchList);
      }

      const queryBool = queryValue === 'true';
      const matchListFiltered = await MatchService.getAllFilter(queryBool);

      return res.status(200).json(matchListFiltered);
    } catch (error) {
      next(error);
    }
  }
}
