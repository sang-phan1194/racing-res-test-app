import { RaceDataProps } from './types';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement
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
  Chart.register(CategoryScale, LinearScale, BarController, BarElement);

  const data = {
    labels: labelForChart,
    datasets: [
      {
        label: 'Ranking chart',
        data: dataForChart,
        backgroundColor: '#009688',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };
  const options = {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div className="chart-wrapper">
      {checkKey ? (
        <>
          <Bar data={data} options={options} />
        </>
      ) : (
        'No chart available for this data'
      )}
    </div>
  );
}

export default RankingChart;
