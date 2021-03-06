export const data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Dynamic Programming",
      data: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
      borderColor: "#f58634",
      fill: false
    },
    {
      label: "Brute Force",
      data: [0, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049],
      borderColor: "#ffcc29",
      fill: false
    },
  ],
};

export default data;
