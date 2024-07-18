"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartAnnotation from "chartjs-plugin-annotation";

ChartJS.register(ArcElement, Tooltip, Legend, ChartAnnotation);

interface Dataset {
  data: number[];
  backgroundColor: string[];
  circumference?: number;
  borderRadius?: number;
}

export default function DoughnutChart() {
  const datasets: Dataset[] = [
    {
      data: [250],
      backgroundColor: ["#6941c6"],
      borderRadius: 10,
    },
    {
      data: [300],
      backgroundColor: ["#7f56d9"],
      borderRadius: 10,
    },
    {
      data: [350],
      backgroundColor: ["#b692f6"],
      borderRadius: 10,
    },
  ];

  const maxValue: number = Math.max(
    ...datasets.map((dataset) => dataset.data[0]!)
  );

  datasets.forEach((dataset) => {
    dataset.circumference = (dataset.data[0]! / maxValue) * 270;
  });

  return (
    <Doughnut
      id="canvas"
      data={{
        labels: ["Dataset 1", "Dataset 2", "Dataset 3"],
        datasets: datasets,
      }}
      options={{
        responsive: true,
        layout: {
          padding: {
            top: 0, // Padding superior
            right: 22, // Padding derecho
            bottom: 30, // Padding inferior
            left: 0, // Padding izquierdo
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          annotation: {
            annotations: {
              centerText: {
                type: "label",
                xValue: 0.5,
                yValue: 0.5,
                position: {
                  x: "center",
                  y: "start",
                },
                content: ["Active users", "", "1,000"],
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                font: [
                  {
                    size: 14,
                    family: "Arial",
                  },
                  {
                    size: 6,
                    family: "Arial",
                  },
                  {
                    size: 35,
                    weight: "bold",
                    family: "Arial",
                  },
                ],
                color: ["#808996", "#101828"],
              },
            },
          },
        },
      }}
    />
  );
}
