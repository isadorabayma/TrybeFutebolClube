const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

module.exports = (sequelize) => {
    const Teams = sequelize.define(
        'Teams',
        Attributes,
        {
            timestamps: false,
            // não cria createAt nem pubishAt...
            tableName: 'Teams',
            // sem o nome da tabela o proprio sequelize define sozinho com um pural do User
        },
    );

    Teams.associate = (models) => {
        Teams.hasMany(models.Matches, { foreignKey: 'home_team', as: 'home_team' });
        Teams.hasMany(models.Matches, { foreignKey: 'away_team', as: 'away_team' });
    };

  return Teams;
};