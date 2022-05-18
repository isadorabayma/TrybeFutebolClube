import { NextFunction, Response, Request } from 'express';
import TeamRepo from '../repository/team';

export default class TeamController {
  public static async getAll(req: Request, res: Response, next: NextFunction): Promise<
  Response | void> {
    try {
      const teamList = await TeamRepo.getAll();
      if (!teamList) return res.status(401).json({ message: 'something wrong' });

      return res.status(200).json(teamList);
    } catch (e) {
      next(e);
    }
  }

  public static async getAllById(req: Request, res: Response, next: NextFunction) : Promise<
  Response | void> {
    try {
      const { id } = req.params;
      const teamById = await TeamRepo.getAllById(id);

      if (!teamById) return res.status(401).json({ message: 'Team not found' });

      return res.status(200).json(teamById);
    } catch (e) {
      next(e);
    }
  }
}
