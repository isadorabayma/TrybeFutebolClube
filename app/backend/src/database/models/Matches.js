const { DataTypes } = require('sequelize');

const Attributes = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    home_team: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    home_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    away_team: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    away_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
};
    
module.exports = (sequelize) => {
    const Matches = sequelize.define(
        'Matches',
        Attributes,
        {
            timestamps: false,
            // não cria createAt nem pubishAt...
            tableName: 'Matches',
            // sem o nome da tabela o proprio sequelize define sozinho com um pural do User
        },
    );

    Matches.associate = (models) => {
        Matches.belongsTo(models.Teams, { foreignKey: 'home_team', as: 'home_team' });
        Matches.belongsTo(models.Teams, { foreignKey: 'away_team', as: 'away_team' });
    };

  return Matches;
};