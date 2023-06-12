import { useState } from 'react';
import Search from './Search';
import Table from './Table';
import RankingChart from './RankingChart';
import { RaceData } from './types';
import './App.scss';

function App() {
  const [displayResult, setDisplayResult] = useState<RaceData[]>([]);
  const [typeOfRes, setTypeofRes] = useState('table');
  return (
    <div className="app-wrapper">
      <h1>F1 Formula Results</h1>
      <h4>
        Please select from the options below to display the racing results
      </h4>
      <Search setDisplayResult={setDisplayResult} />
      <div className="result">
        {displayResult.length ? (
          <ul>
            <li onClick={() => setTypeofRes('table')}>Table</li>
            <li onClick={() => setTypeofRes('chart')}>Chart</li>
          </ul>
        ) : null}

        {typeOfRes === 'table' ? (
          <Table displayResult={displayResult} />
        ) : (
          <RankingChart displayResult={displayResult} />
        )}
      </div>
    </div>
  );
}

export default App;
