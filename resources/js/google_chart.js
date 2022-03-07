window.addEventListener("load", () => {
  google.charts.load("current", { packages: ["corechart", "line"] });
  google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {
    let data = new google.visualization.DataTable();
    data.addColumn("number", "Days");
    data.addColumn("number", "Retention");

    data.addRows([
      [0, 1],
      [1, 0.73],
      [2, 0.51],
      [3, 0.37],
      [4, 0.26],
      [5, 0.195],
      [6, 0.15],
      [7, 0.12],
    ]);

    let options = {
      title: "THE FORGETTING CURVE",
      titleTextStyle: { color: "#FFFFFF" },
      backgroundColor: { fill: "transparent" },
      curveType: "function",
      colors: ["#FFFF00"],
      enableInteractivity: false,
      legend: { position: "none" },
      fontName: "Times New Roman",

      hAxis: {
        title: "Days",
        titleTextStyle: {
          color: "#FFFFFF",
        },
        baselineColor: "#FFFFFF",
        gridlines: {
          color: "#FFFFFF",
          count: 7,
        },
        minorGridlines: {
          count: 0,
        },
        textStyle: {
          color: "#FFFFFF",
        },
      },

      vAxis: {
        baselineColor: "#FFFFFF",
        title: "Retention",
        titleTextStyle: {
          color: "#FFFFFF",
        },
        format: "#%",
        gridlines: {
          color: "#FFFFFF",
          count: 5,
        },
        minorGridlines: {
          count: 0,
        },
        textStyle: {
          color: "#FFFFFF",
        },
      },
    };

    let chart = new google.visualization.LineChart(
      document.getElementById("chart_div")
    );

    chart.draw(data, options);
  }
});
