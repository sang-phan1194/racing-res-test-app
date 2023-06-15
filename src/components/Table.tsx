import { v4 } from 'uuid';
import { RaceDataProps } from '../types';

function Table(props: RaceDataProps) {
  const { displayResult } = props;

  const keys = displayResult.length
    ? Object.keys(displayResult[0]).filter((i) => i !== 'index')
    : [];

  return (
    <table>
      <thead>
        <tr>
          {displayResult.length
            ? keys.map((i) => <td key={v4()}>{i.toLocaleUpperCase()}</td>)
            : null}
        </tr>
      </thead>
      <tbody>
        {displayResult.length
          ? displayResult.map((item: any) => (
              <tr key={v4()}>
                {keys.map((i) => (
                  <td key={v4()}>{item[i]}</td>
                ))}
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}

export default Table;
