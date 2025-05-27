import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function SingleSummaryBarChart({ expense, income }) {
  const [chartData, setChartData] = useState({
    labels: ['Income', 'Expense'],
    datasets: [{
      data: [0, 0],
      backgroundColor: [
        'rgba(0, 123, 255, 0.7)', 
        'rgba(220, 53, 69, 0.7)'   
      ],
      borderColor: [
        'rgba(0, 123, 255, 1)',   
        'rgba(220, 53, 69, 1)'     
      ],
      borderWidth: 1,
    }]
  });

  useEffect(() => {
    setChartData({
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [income, expense],
        backgroundColor: [
          'rgba(0, 123, 255, 0.7)', 
          'rgba(220, 53, 69, 0.7)'   
        ],
        borderColor: [
          'rgba(0, 123, 255, 1)',    
          'rgba(220, 53, 69, 1)' 
        ],
        borderWidth: 1,
      }]
    });
  }, [expense, income]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            family: "'Times New Roman', Times, serif"
          }
        }
      },
      title: {
        display: true,
        text: 'Income vs Expense',
        font: {
          size: 18,
          family: "'Times New Roman', Times, serif",
          weight: 'bold'
        }
      }
    },
    cutout: '70%',
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0
        }
    }
  };

  return <div className="chart-container"><Doughnut data={chartData} options={options} /></div>;
}

export default SingleSummaryBarChart; 