// import * as sinon from 'sinon';
// import * as chai from 'chai';
// import chaiHttp = require('chai-http');
import { describe, it, before, after } from 'mocha';

// import { app } from '../app';
// import User from '../database/models/User';

// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;

// let chaiHttpResponse: Response;

describe('LoginModel', () => {
  const mockUser = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  }

  describe('LoginRepo', () => {
    it('db findUser fail'),
    it('db findUser ok')
  })
})