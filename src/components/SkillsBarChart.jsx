
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJSCore,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js/auto';

 ChartJSCore.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function SkillBarChart({ data, teamMembers }) {
  const chartData = {
    labels: data.map(row => row.skill),
    datasets: teamMembers.map((member, index) => ({
      label: member,
      data: data.map(row => row[member]),
      backgroundColor: ['#007bff', '#ffc107', '#28a745'][index % 3],
    }))
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Skill Level Distribution' }
    }
  };

  return <Bar data={chartData} options={options} />;
}

export default SkillBarChart;
