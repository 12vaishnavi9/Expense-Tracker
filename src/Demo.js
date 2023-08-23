import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { Grid } from '@material-ui/core';

Chart.register(ArcElement);

const SimpleChart = () => {
  const chartData = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [300, 450, 200],
        backgroundColor: ['black', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
            fontSize: 12,
            rotation: 45,  // Adjust the font size as needed
          },
      },
      title: {
        display: true,
        text: 'Simple Doughnut Chart',
      },
    },
  };

  return <Grid item sm={6}>
  <Doughnut data={chartData} options={chartOptions} />
</Grid>
;
};

export default SimpleChart;
