import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import s from "./PentagonGraph.module.css";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const PentagonGraph = ({ type }) => {
  const data = {
    labels: [
      `${type.details[0].field}`,
      `${type.details[1].field}`,
      `${type.details[2].field}`,
      `${type.details[3].field}`,
      `${type.details[4].field}`,
    ],
    datasets: [
      {
        label: "역량",
        data: [
          `${type.details[0].score}`,
          `${type.details[1].score}`,
          `${type.details[2].score}`,
          `${type.details[3].score}`,
          `${type.details[4].score}`,
        ],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "#282828",
        },
        grid: {
          color: "#282828",
        },
        suggestedMin: 1,
        suggestedMax: 7,
        pointLabels: {
          font: {
            size: 10,
            weight: "bold",
          },
          color: "black",
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={s.PentagonGraph}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default PentagonGraph;
