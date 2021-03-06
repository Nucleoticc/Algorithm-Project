export const data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Dynamic Programming",
      data: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
      borderColor: "#f58634",
      fill: false,
    },
    {
      label: "Brute Force",
      data: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
      borderColor: "#ffcc29",
      fill: false,
    },
  ],
};

export default data;
