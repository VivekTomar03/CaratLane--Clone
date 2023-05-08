import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar , Pie} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Coustomer Feedback Weekly Chart',
      },
    },
  };
  const labels= ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const data = {
    labels:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Positive %',
        data: [
            Math.floor(Math.random() * 100 + 80),
            Math.floor(Math.random() * 100 + 80),
            Math.floor(Math.random() * 100 + 80),
            Math.floor(Math.random() * 100 + 80),
            Math.floor(Math.random() * 100 + 80),
            Math.floor(Math.random() * 100 + 80),
            Math.floor(Math.random() * 100 + 80),
          ],
          borderColor: "black",
        backgroundColor: '#F9F54B',
      },
      {
        label: 'Negative %',
        data: [
            Math.floor(Math.random() * 60 + 50),
            Math.floor(Math.random() * 60 + 50),
            Math.floor(Math.random() * 60 + 50),
            Math.floor(Math.random() * 60 + 50),
            Math.floor(Math.random() * 60 + 50),
            Math.floor(Math.random() * 60 + 50),
            Math.floor(Math.random() * 60 + 50),
          ],
          borderColor: "black",
        backgroundColor: '#070A52',
      },
    ],
  }
const Chart2 = () => {
  return (
    <div>
       <Bar data={data} options={options}/>
    </div>
  );
}

export default Chart2;
