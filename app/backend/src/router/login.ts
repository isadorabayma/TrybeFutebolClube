import * as express from 'express';
import LoginService from '../service/login';
import LoginController from '../controller/login';
import User from '../database/models/User';

const loginRouter = express.Router();

const loginService = new LoginService(User);
const loginController = new LoginController(loginService);

loginRouter.post(
  '/login',
  // LoginMiddleware.emailValidation,
  // LoginMiddleware.passwordValidation,
  loginController.login,
);

// loginRouter.get('/', LoginController.getRole);

export default loginRouter;
