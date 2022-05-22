import { IleaderMySQL } from '../database/interfaces/Ileader';
import db from '../database/models';

export default class LeaderboardRepo {
  public static async getHomeTeams(): Promise<IleaderMySQL[] | null> {
    const [results] = await db.query(
      `SELECT
        t.team_name AS name,
        COUNT(m.home_team_goals) AS J,
        SUM(IF(m.home_team_goals > m.away_team_goals, 1, 0))  AS V,
        SUM(IF(m.home_team_goals = m.away_team_goals, 1, 0))  AS E,
        SUM(IF(m.home_team_goals < m.away_team_goals, 1, 0))  AS D,
        SUM(m.home_team_goals) AS GP,
        SUM(m.away_team_goals) AS GC,
        SUM(m.home_team_goals - m.away_team_goals) AS SG
      FROM TRYBE_FUTEBOL_CLUBE.matches AS m
      JOIN TRYBE_FUTEBOL_CLUBE.teams AS t
      ON m.home_team = t.id
      WHERE m.in_progress='0'
      GROUP BY t.team_name;`,
    );
    if (!results) return null;

    return results as unknown as IleaderMySQL[];
  }
}
