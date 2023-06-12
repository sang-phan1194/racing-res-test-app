export type RaceData =
  | {
      index: number;
      grandPrix: string;
      date: string;
      winner: string;
      car: string;
      laps: string;
      time: string;
      year: number;
    }
  | {
      index: number;
      position: string;
      driver: string;
      nationality: string;
      car: string;
      pts: string;
      year: number;
    }
  | {
      index: number;
      position: string;
      team: string;
      pts: string;
      year: number;
    };
export interface RaceDataProps {
  displayResult: RaceData[];
}
