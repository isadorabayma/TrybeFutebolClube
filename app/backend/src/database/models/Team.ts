import { Model, DataTypes } from 'sequelize';
import db from '.';

class Team extends Model {
  public id!: number;

  public teamName!: string;
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

// Teams.associate = (models) => {
//   Teams.hasMany(models.Matches, { foreignKey: 'home_team', as: 'home_team' });
//   Teams.hasMany(models.Matches, { foreignKey: 'away_team', as: 'away_team' });
// };

export default Team;
