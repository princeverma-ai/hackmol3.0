let sideBar = document.querySelector(".sideBar");
let menuButton = document.querySelector(".menuDiv");
let burgerIcon = document.querySelector(".burgerIcon");
let crossIcon = document.querySelector(".crossIcon");

let dashboardButton = document.querySelector("#dashboardButton");
let profileButton = document.querySelector("#profileButton");
let analyticsButton = document.querySelector("#analyticsButton");
let goalsButton = document.querySelector("#goalsButton");
let logoutButton = document.querySelector("#logoutButton");

let manageIncome = document.querySelector("#manageIncome");
let manageExpense = document.querySelector("#manageExpense");

//side bar
let sideBarOpened = false;

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

//charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var incomeData = google.visualization.arrayToDataTable([
    ["Source", "Value"],
    ["Family", 5000],
    ["Internship", 2000],
    ["website selling", 4000],
    ["marketing", 1500],
    ["shares", 5800],
  ]);

  var incomeOptions = {
    title: "Income Sources",
    backgroundColor: "rgb(243, 247, 252)",
    pieHole: 0.4,
  };

  var incomeChart = new google.visualization.PieChart(
    document.getElementById("incomePieChart")
  );

  incomeChart.draw(incomeData, incomeOptions);

  var expenseData = google.visualization.arrayToDataTable([
    ["Source", "Value"],
    ["party", 2000],
    ["shoes", 3000],
    ["netflix", 199],
    ["stationary", 1000],
    ["clothes", 5800],
  ]);

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

let renderHtml = function (htmlString) {
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
