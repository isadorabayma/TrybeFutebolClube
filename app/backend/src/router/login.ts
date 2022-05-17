import * as express from 'express';
import LoginMiddleware from '../middleware/login';
import LoginController from '../controller/login';

const loginRouter = express.Router();

loginRouter.post(
  '/login',
  LoginMiddleware.emailVal,
  LoginMiddleware.passVal,
  LoginController.login,
);

loginRouter.get('/login/validate', LoginController.getRole);

export default loginRouter;
