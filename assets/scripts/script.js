var options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Платеж по Тарифу",
      data: [750, 750, 630, 512, 734, 723, 946, 315, 225],
    },
  ],
  xaxis: {
    categories: [
      "27.04.2021",
      "27.05.2021",
      "27.06.2021",
      "27.07.2021",
      "27.08.2021",
      "27.09.2021",
      "27.10.2021",
      "27.11.2021",
      "27.12.2021",
    ],
  },
};

var chart = new ApexCharts(document.querySelector("#earning"), options);

chart.render();
