import * as express from 'express';
import loginRouter from './router/login';
// import { copyFileSync } from 'fs';

class App {
  public app: express.Express;

  public router = loginRouter;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    this.app.use('/', this.router);
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    // o que que o CORs faz?
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`is listenning at ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
