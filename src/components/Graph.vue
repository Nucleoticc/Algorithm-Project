<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  props: ["graphData"],
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: this.graphData,
        options: {
          legend: {
            labels: {
              fontColor: "black",
            },
          },
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                  fontColor: "black",
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "black",
                },
              },
            ],
          },
        },
      });
    },
  },
};
</script>
