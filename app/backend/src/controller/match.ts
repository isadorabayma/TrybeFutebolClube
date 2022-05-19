import { NextFunction, Response, Request } from 'express';
import MatchService from '../service/match';

export default class MatchController {
  public static async getall(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const matchList = await MatchService.getAll();

      return res.status(200).json(matchList);
    } catch (error) {
      next(error);
    }
  }
}
