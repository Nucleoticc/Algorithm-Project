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
      data: [
        0,
        1,
        4,
        27,
        256,
        3125,
        46656,
        823543,
        16777216,
        387420489,
        10000000000,
      ],
      borderColor: "#ffcc29",
      fill: false,
    },
  ],
};

export default data;
