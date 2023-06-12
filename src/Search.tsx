import { useState } from 'react';
import { resultByDrivers, resultByRaces, resultByTeams } from './results/datas';

function Search(props: any) {
  const { setDisplayResult } = props;
  const [year, setYear] = useState<number>(2023);
  const [filterField, setFilterField] = useState<string>('race');

  const handleFormChange = (e: any) => {
    if (e.target.name === 'year') {
      const newYear = +e.target.value
      setYear(newYear);
      if (filterField === 'driver') {
        const displayResult = resultByDrivers.filter((e) => e.year === newYear);
        setDisplayResult(displayResult);
      }
      if (filterField === 'race') {
        const displayResult = resultByRaces.filter((e) => e.year === newYear);
        setDisplayResult(displayResult);
      }
      if (filterField === 'team') {
        const displayResult = resultByTeams.filter((e) => e.year === newYear);
        setDisplayResult(displayResult);
      }
    } else if (e.target.name === 'filterField') {
      setFilterField(e.target.value);
      if (e.target.value === 'driver') {
        const displayResult = resultByDrivers.filter((e) => e.year === year);
        setDisplayResult(displayResult);
      }
      if (e.target.value === 'race') {
        const displayResult = resultByRaces.filter((e) => e.year === year);
        setDisplayResult(displayResult);
      }
      if (e.target.value === 'team') {
        const displayResult = resultByTeams.filter((e) => e.year === year);
        setDisplayResult(displayResult);
      }
    }
  };

  return (
    <div className="form-wrapper">
      <form action="" onChange={(e) => handleFormChange(e)}>
        <select defaultValue='' name="year" id="">
          {/* <option value="">Please choose a year</option> */}
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
        <select defaultValue='' name="filterField" id="">
          {/* <option value="race">Please choose a filter field</option> */}
          <option value="race">RACES</option>
          <option value="team">TEAMS</option>
          <option value="driver">DRIVERS</option>
        </select>
      </form>
    </div>
  );
}

export default Search;
