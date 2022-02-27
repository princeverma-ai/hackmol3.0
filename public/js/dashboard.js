//side bar
menuButton = document.querySelector(".menuDiv");
sideBar = document.querySelector(".sideBar");
burgerIcon = document.querySelector(".burgerIcon");
crossIcon = document.querySelector(".crossIcon");

dashboardButton = document.querySelector("#dashboardButton");
profileButton = document.querySelector("#profileButton");
analyticsButton = document.querySelector("#analyticsButton");
goalsButton = document.querySelector("#goalsButton");
logoutButton = document.querySelector("#logoutButton");

manageIncome = document.querySelector("#manageIncome");
manageExpense = document.querySelector("#manageExpense");
sideBarOpened = false;

totalIncome = document.querySelector("#totalIncome");
totalExpense = document.querySelector("#totalExpense");
totalSaving = document.querySelector("#totalSaving");

totalIncome.innerText = getTotalIncome(user.incomeSources);
totalExpense.innerText = getTotalExpense(user.expenses);
totalSaving.innerText =
  getTotalIncome(user.incomeSources) - getTotalExpense(user.expenses);

menuButton.addEventListener("click", (e) => {
  if (!sideBarOpened) {
    sideBar.classList.add("sideBarComeInAnimation");
    sideBar.classList.remove("sideBarGoAnimation");
    setTimeout(() => {
      burgerIcon.style.display = "none";
      crossIcon.style.display = "unset";
      sideBarOpened = true;
    }, 300);
  } else {
    sideBar.classList.add("sideBarGoAnimation");
    sideBar.classList.remove("sideBarComeInAnimation");
    setTimeout(() => {
      burgerIcon.style.display = "unset";
      crossIcon.style.display = "none";
      sideBarOpened = false;
    }, 300);
  }
});

renderHtml = function (htmlString) {
  document.open("text/html", "replace");
  document.write(htmlString);
  document.close();
};
//---------------------------------------------------------------------
dashboardButton.addEventListener("click", (e) => {
  axios.get("/dashboard").then((data) => {
    renderHtml(data.data);
  });
});
//---------------------------------------------------------------------
profileButton.addEventListener("click", (e) => {
  axios.get("/profile").then((data) => {
    renderHtml(data.data);
  });
});
//---------------------------------------------------------------------
analyticsButton.addEventListener("click", (e) => {
  axios.get("/analytics").then((data) => {
    renderHtml(data.data);
  });
});
//---------------------------------------------------------------------
goalsButton.addEventListener("click", (e) => {
  axios.get("/goals").then((data) => {
    renderHtml(data.data);
  });
});
//---------------------------------------------------------------------
logoutButton.addEventListener("click", (e) => {
  axios.get("/logout").then((data) => {
    renderHtml(data.data);
  });
});
//---------------------------------------------------------------------
manageIncome.addEventListener("click", (e) => {
  axios.get("/income").then((data) => {
    renderHtml(data.data);
  });
});
//---------------------------------------------------------------------
manageExpense.addEventListener("click", (e) => {
  axios.get("/expense").then((data) => {
    renderHtml(data.data);
  });
});

google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var incomeData = google.visualization.arrayToDataTable(makeVisualizationData(user.incomeSources));

  var incomeOptions = {
    title: "Income Sources",
    backgroundColor: "rgb(243, 247, 252)",
    pieHole: 0.4,
  };

  var incomeChart = new google.visualization.PieChart(
    document.getElementById("incomePieChart")
  );

  incomeChart.draw(incomeData, incomeOptions);

  var expenseData = google.visualization.arrayToDataTable(makeVisualizationData(user.expenses));

  var expenseOptions = {
    title: "Expenses",
    backgroundColor: "rgb(243, 247, 252)",
    pieHole: 0.4,
  };

  var expenseChart = new google.visualization.PieChart(
    document.getElementById("expensePieChart")
  );

  expenseChart.draw(expenseData, expenseOptions);
}
