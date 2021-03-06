export const data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Dynamic Programming",
      data: [0, 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
      borderColor: "#f58634",
      fill: false,
    },
    {
      label: "Brute Force",
      data: [0, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576],
      borderColor: "#ffcc29",
      fill: false,
    },
  ],
};

export default data;
