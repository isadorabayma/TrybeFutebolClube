import * as express from 'express';
import leaderboardController from '../controller/leaderboard';

const leaderboardRouter = express.Router();

leaderboardRouter.get(
  '/leaderboard',
  leaderboardController.getTeams,
);
leaderboardRouter.get(
  '/leaderboard/home',
  leaderboardController.getHomeTeams,
);
leaderboardRouter.get(
  '/leaderboard/away',
  leaderboardController.getAwayTeams,
);

export default leaderboardRouter;
