export type RaceData =
  | {
      index: number;
      grandPrix: string;
      date: string;
      winner: string;
      car: string;
      laps: string;
      time: string;
    }
  | {
      index: number;
      position: string;
      driver: string;
      nationality: string;
      car: string;
      pts: string;
    }
  | {
      index: number;
      position: string;
      team: string;
      pts: string;
    };
export interface RaceDataProps {
  displayResult: RaceData[];
}
