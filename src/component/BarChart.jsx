import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Rent Collected (Rs)",
        data: [12000, 15000, 10000, 18000, 16000],
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="h-96 flex-1">
      <h2 className="mb-8 font-poppins text-2xl font-semibold">
        Monthly Rent Collection
      </h2>

      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
