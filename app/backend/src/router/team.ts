import * as express from 'express';
import TeamController from '../controller/team';

const teamRouter = express.Router();

teamRouter.get('/teams', TeamController.getAll);
teamRouter.get('/teams/:id', TeamController.getAllById);

export default teamRouter;
