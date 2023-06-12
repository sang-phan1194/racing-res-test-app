import driver2021 from './2021-drivers.json';
import driver2022 from './2022-drivers.json';
import driver2023 from './2023-drivers.json';
import team2021 from './2021-teams.json';
import team2022 from './2022-teams.json';
import team2023 from './2023-teams.json';
import race2021 from './2021-races.json';
import race2022 from './2022-races.json';
import race2023 from './2023-races.json';
import { RaceData } from '../types';

const resultByDrivers: RaceData[] = [];
driver2021.forEach((e) => {
  const addYear = { ...e, year: 2021 };
  resultByDrivers.push(addYear);
});
driver2022.forEach((e) => {
  const addYear = { ...e, year: 2022 };
  resultByDrivers.push(addYear);
});
driver2023.forEach((e) => {
  const addYear = { ...e, year: 2023 };
  resultByDrivers.push(addYear);
});

const resultByTeams: RaceData[] = [];
team2021.forEach((e) => {
  const addYear = { ...e, year: 2021 };
  resultByTeams.push(addYear);
});
team2022.forEach((e) => {
  const addYear = { ...e, year: 2022 };
  resultByTeams.push(addYear);
});
team2023.forEach((e) => {
  const addYear = { ...e, year: 2023 };
  resultByTeams.push(addYear);
});

const resultByRaces: RaceData[] = [];
race2021.forEach((e) => {
  const addYear = { ...e, year: 2021 };
  resultByRaces.push(addYear);
});
race2022.forEach((e) => {
  const addYear = { ...e, year: 2022 };
  resultByRaces.push(addYear);
});
race2023.forEach((e) => {
  const addYear = { ...e, year: 2023 };
  resultByRaces.push(addYear);
});

export { resultByDrivers, resultByTeams, resultByRaces };
