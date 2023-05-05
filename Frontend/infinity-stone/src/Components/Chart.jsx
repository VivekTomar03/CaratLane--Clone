import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "User and Products Information Weekly Chart",
    },
  },
};
const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Users",
      data: [
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
      ],

      borderColor: "black",
      backgroundColor: "red",
    },
    {
      label: "Rigns",
      data: [
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
      ],
      borderColor: "black",
      backgroundColor: "green",
    },
    {
      label: "Earings",
      data: [
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
        Math.floor(Math.random() * 100 + 50),
      ],

      borderColor: "black",
      backgroundColor: "blue",
    },
  ],
};
const Chart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
