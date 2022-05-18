import * as express from 'express';
// import TeamMiddleware from '../middleware/team';
import TeamController from '../controller/team';

const teamRouter = express.Router();

teamRouter.get('/team', TeamController.getAll);
teamRouter.get('/team/:id', TeamController.getAllById);

export default teamRouter;
