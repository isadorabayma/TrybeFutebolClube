import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as chaiAsPromise from 'chai-as-promised';
import { describe, it, before, after } from 'mocha';

import { app } from '../app';
import User from '../database/models/User';
import LoginRepo from '../repository/login';
import LoginService from '../service/login';

import { Response } from 'superagent';

chai.use(chaiAsPromise);
chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResponse: Response;

describe('LoginModel', () => {
  const mockFullUser = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  }

  const mockUser = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com'
  }

  describe('LoginRepo', () => {
    beforeEach(sinon.restore);
    it('db findUser fail', () => {
      sinon.stub(User, 'findOne').rejects();
      expect(LoginRepo.findUser(mockFullUser.email)).to.eventually.be.equal(null);
    }),
    it('db findUser ok', () => {
      sinon.stub(User, 'findOne').resolves(mockFullUser as User);
      expect(LoginRepo.findUser(mockFullUser.email))
      .to.eventually.be.equal(mockFullUser);      
    })
  })

  describe('LoginService', () => {
    it('findUser retorna user sem a senha', () => {
      expect(LoginService.findUser(mockFullUser)).to.deep.equal(mockUser);
    })
  })

  describe('LoginContrller', () => {
    beforeEach(sinon.restore);
    it('login no email', async () => {
      sinon.stub(User, 'findOne').resolves(mockFullUser as User);
      chaiHttpResponse = await chai.request(app).post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin'})

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).have.property('user');
      expect(chaiHttpResponse.body).have.property('token');
    }),
    it('login wrong password'),
    it('tokenGenerator'),
    it('login ok')
  })  
})