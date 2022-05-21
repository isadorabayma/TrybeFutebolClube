import * as express from 'express';
import MatchController from '../controller/match';

const teamRouter = express.Router();

teamRouter.get('/matches', MatchController.getAll);
teamRouter.post('/matches', MatchController.create);
teamRouter.patch('/matches/:id/finish', MatchController.finishMatch);

export default teamRouter;
