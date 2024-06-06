import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
export const ChartComponent = ({ labels, data }) => {
  // console.log(labels);
  // console.log(data);
  const [chartData, setChartData] = useState({
    labels: labels || [],
    datasets: [
      {
        label: "Amount(g)",
        data: data || [],
        backgroundColor: [
          "#993020",
          "#2605ff",
          "#63d3b3",
          "#b2912e",
          "#050703",
          "#261821",
          "#42dd52",
          "#bce554",
          "#aec1af",
          "#5e661c",
          "#2cb1ea",
        ],
        borderColor: [
          "#993020",
          "#2605ff",
          "#63d3b3",
          "#b2912e",
          "#050703",
          "#261821",
          "#42dd52",
          "#bce554",
          "#aec1af",
          "#5e661c",
          "#2cb1ea",
        ],
      },
    ],
  });

  return (
    <div className="card categoryCard">
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: header || "dummy",
              text: "",
              align: "start",
              font: { size: 20 },
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};
