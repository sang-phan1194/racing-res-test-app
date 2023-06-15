import { RaceDataProps } from '../types';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip
} from 'chart.js';

function RankingChart(props: RaceDataProps) {
  const { displayResult } = props;
  const checkKey = 'position' in displayResult[0];
  let dataForChart: number[] = [];
  let labelForChart: string[] = [];
  if (checkKey && 'driver' in displayResult[0]) {
    displayResult.forEach((item: any) => {
      dataForChart.push(+item['pts']);
      labelForChart.push(item['driver']);
    });
  }
  if (checkKey && 'team' in displayResult[0]) {
    displayResult.forEach((item: any) => {
      dataForChart.push(+item['pts']);
      labelForChart.push(item['team']);
    });
  }
  Chart.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Tooltip
  );

  const data = {
    labels: labelForChart,
    datasets: [
      {
        label: '',
        data: dataForChart,
        backgroundColor: '#be0404',
        borderColor: '',
        borderWidth: 1
      }
    ]
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index' as 'index',
        intersect: false
      }
    }
  };

  return (
    <div className="chart-wrapper">
      {checkKey ? (
        <>
          <h4>Ranking chart by points</h4>
          <Bar data={data} options={options} />
        </>
      ) : (
        'No chart available for this data'
      )}
    </div>
  );
}

export default RankingChart;
