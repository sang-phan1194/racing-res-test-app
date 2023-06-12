import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarController, BarElement } from 'chart.js';

function RankingChart(props: any) {
  const { displayResult } = props;
  const checkKey = 'position' in displayResult[0];
  let dataForChart: any[] = [];
  let labelForChart: any[] = [];
  if (checkKey && 'driver' in displayResult[0]) {
    displayResult.forEach((item: any) => {
      dataForChart.push(+item['pts']);
      labelForChart.push(item['driver']);
    });
    console.log(dataForChart, labelForChart);
  }
  if (checkKey && 'team' in displayResult[0]) {
    displayResult.forEach((item: any) => {
      dataForChart.push(+item['pts']);
      labelForChart.push(item['team']);
    });
    // console.log(dataForChart, labelForChart)
  }
  Chart.register(CategoryScale, LinearScale, BarController, BarElement);


  const data = {
    labels: labelForChart,
    datasets: [
      {
        label: 'Ranking chart',
        data: dataForChart,
        backgroundColor: 'rgba(75,192,192,0.2)',
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
