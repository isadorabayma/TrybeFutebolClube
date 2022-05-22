export interface IleaderMySQL {
  name: string,
  J: number,
  V: string,
  E: string,
  D: string,
  GP: string,
  GC: string,
  SG: string
}

export interface IleaderRes {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
}
