import * as express from 'express';
import TeamController from '../controller/team';

const teamRouter = express.Router();

teamRouter.get('/teams', TeamController.getAll);

export default teamRouter;
