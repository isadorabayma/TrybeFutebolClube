import * as express from 'express';
import LoginController from '../controller/login';

const loginRouter = express.Router();
const LoginInstence = new LoginController('test');

loginRouter.post(
  '/login',
  // LoginMiddleware.emailValidation,
  // LoginMiddleware.passwordValidation,
  LoginController.login,
  LoginInstence.log,
);

// loginRouter.get('/', LoginController.getRole);

export default loginRouter;
