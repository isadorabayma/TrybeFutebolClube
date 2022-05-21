import * as express from 'express';
import MatchMiddleware from '../middleware/match';
import MatchController from '../controller/match';

const teamRouter = express.Router();

teamRouter.get('/matches', MatchController.getAll);
teamRouter.post(
  '/matches',
  MatchMiddleware.noDoubleTeams,
  MatchMiddleware.isTeamsinDB,
  MatchController.create,
);
teamRouter.patch('/matches/:id', MatchController.edit);
teamRouter.patch('/matches/:id/finish', MatchController.finishMatch);

export default teamRouter;
