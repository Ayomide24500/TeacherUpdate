import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Male = 100;
const Female = 120;

export const data = {
  labels: [`Male: ${Male}, Female: ${Female}`],
  datasets: [
    {
      label: "# of Votes",
      data: [Male, Female],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="sm:w-[300px] w-[200px]">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Chart;
