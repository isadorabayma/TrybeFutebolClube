import * as express from 'express';
import MatchController from '../controller/match';

const teamRouter = express.Router();

teamRouter.get('/matches', MatchController.getAll);

export default teamRouter;
