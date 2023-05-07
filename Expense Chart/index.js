// Add JavaScript code here
const canvasElement = document.getElementById("expense-chart");
const config = {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Income",
        data: [3800, 2200, 1700, 3500, 2100, 1700, 800],
        borderRadius: [25],
        backgroundColor: "#896bb3",
      },
      {
        label: "Expenses",
        data: [1800, 800, 400, 1900, 1700, 900, 400],
        borderRadius: [25],
        backgroundColor: "#f25476",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
};

const expenseChart = new Chart(canvasElement, config);
