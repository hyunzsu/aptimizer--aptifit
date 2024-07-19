import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import s from "./PentagonGraph.module.css";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const PentagonGraph = ({ result }) => {
  const data = {
    labels: [
      `${result.strength.details[0].field}`,
      `${result.strength.details[1].field}`,
      `${result.strength.details[2].field}`,
      `${result.strength.details[3].field}`,
      `${result.strength.details[4].field}`,
    ],
    datasets: [
      {
        label: "역량",
        data: [
          `${result.strength.details[0].score}`,
          `${result.strength.details[1].score}`,
          `${result.strength.details[2].score}`,
          `${result.strength.details[3].score}`,
          `${result.strength.details[4].score}`,
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
            size: 14,
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
        display: false, // 범례 숨기기 (필요시 사용)
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
