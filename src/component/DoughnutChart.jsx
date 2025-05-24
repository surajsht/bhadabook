import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Collected", "Advance", "Pending"],
    datasets: [
      {
        label: "Payment Status",
        data: [120000, 40000, 20000], // fake data, yo replace garna milcha
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
        borderColor: "#FFFFFF",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#374151",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="flex-1">
      <h2 className="mb-8 font-poppins text-2xl font-semibold">
        Rent Distribution
      </h2>

      <div className="flex h-72 items-center justify-center sm:h-80 md:h-96 lg:h-64 xl:h-80">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
