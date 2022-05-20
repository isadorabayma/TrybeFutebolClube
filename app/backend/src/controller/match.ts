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

  public static async create(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const reqMatch = req.body;
      const createdMatch = await MatchService.create(reqMatch);
      return res.status(201).json(createdMatch);
    } catch (error) {
      next(error);
    }
  }

  public static async finishMatch(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const { id } = req.params;
      await MatchService.finishMatch(id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  }
}
