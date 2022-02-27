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

let totalIncome = document.querySelector("#totalIncome");
let totalExpense = document.querySelector("#totalExpense");
let totalSaving = document.querySelector("#totalSaving");

function getTotalIncome(incomeArray) {
  let totalIncome = 0;
  for (let element of incomeArray) {
    totalIncome += element.value;
  }
  return totalIncome;
}
function getTotalExpense(expenseArray) {
  let totalExpense = 0;
  for (let element of expenseArray) {
    totalExpense += element.value;
  }
  return totalExpense;
}
function getSavings(incomeArray, expenseArray) {
  return getTotalIncome(incomeArray) - getTotalExpense(expenseArray);
}

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
totalIncome.innerText = getTotalIncome(user.incomeSources);
totalExpense.innerText = getTotalExpense(user.expenses);
totalSaving.innerText =
  getTotalIncome(user.incomeSources) - getTotalExpense(user.expenses);
//charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function makeVisualizationData(dataArray) {
  let array=[];
  for(let elem of dataArray){
    array.push([elem.name,elem.value]);
  }
  array.unshift(["Name","Value"]);
  return array;
}

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
