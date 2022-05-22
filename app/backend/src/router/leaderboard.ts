import * as express from 'express';
import leaderboardController from '../controller/leaderboard';

const leaderboardRouter = express.Router();

leaderboardRouter.get(
  '/leaderboard/home',
  leaderboardController.getHomeTeams,
);

export default leaderboardRouter;
