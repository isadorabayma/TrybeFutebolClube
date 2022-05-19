import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
// import * as chaiAsPromise from 'chai-as-promised';
import { describe, it, before, after } from 'mocha';
import { Iteam } from '../database/interfaces/Iteam'

import { app } from '../app';
import Team from '../database/models/Team';
import TeamRepo from '../repository/team';

import { Response } from 'superagent';

// chai.use(chaiAsPromise);
chai.use(chaiHttp);

const { expect } = chai;

let chaiHttpResponse: Response;

describe('/teams', () => {
  const mockTeamList = [
      {
        id: 1,
        teamName: "Avaí/Kindermann"
      },
      {
        id: 2,
        teamName: "Bahia"
      },
      {
        id: 3,
        teamName: "Botafogo"
      }
  ]

  describe('integration of /teams', () => {
    beforeEach(sinon.restore);
    it('getAll working', async () => {
      sinon.stub(Team, 'findAll').resolves(mockTeamList as [Team]);
      chaiHttpResponse = await chai.request(app).get('/teams')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body[0]).have.property('id');
      expect(chaiHttpResponse.body[0]).have.property('teamName');
    }),
    it('integration of /teams/:id', async () => {
      sinon.stub(Team, 'findOne').resolves(mockTeamList[0] as Team);
      chaiHttpResponse = await chai.request(app).get('/teams/1')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).have.property('id');
      expect(chaiHttpResponse.body).have.property('teamName');
      expect(chaiHttpResponse.body.id).to.be.equal(1);
    }),
    it('getAll fail', () => {
      sinon.stub(Team, 'findAll').rejects();
      expect(TeamRepo.getAll()).to.eventually.be.equal(null);
    }),
    it('')
  })  
})