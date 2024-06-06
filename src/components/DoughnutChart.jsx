import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
  const chartRef = useRef();
  let myChart = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      
      if (myChart) {
        myChart.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Nutrition Data'
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
