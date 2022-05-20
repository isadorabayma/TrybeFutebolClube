import { Association, Model, DataTypes } from 'sequelize';
import db from '.';
import Match from './Match';

class Team extends Model {
  public id!: number;

  public teamName!: string;

  declare static associations: {
    projects: Association<Team, Match>;
  };
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Team.hasMany(Match, { sourceKey: 'id', foreignKey: 'homeTeam', as: 'homeMatches' });
Team.hasMany(Match, { sourceKey: 'id', foreignKey: 'awayTeam', as: 'awayMatches' });
Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Team;
