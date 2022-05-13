import * as express from 'express';
import LoginController from '../controller/login';

const loginRouter = express.Router();

loginRouter.post(
  '/login',
  // LoginMiddleware.emailValidation,
  // LoginMiddleware.passwordValidation,
  LoginController.login,
);

// loginRouter.get('/', LoginController.getRole);

export default loginRouter;
