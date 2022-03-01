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
login = true;
let user = {
  name: "Prince",
  email: "9914604404p@gmail.com",

  incomeSources: [
    {
      name: "Internship",
      amount: 2000,
      description: "Internship",
      date: new Date().getDate(),
    },
    {
      name: "PocketMoney",
      amount: 5000,
      description: "parents",
      date: new Date().getDate(),
    },
    {
      name: "Marketing",
      amount: 3500,
      description: "marketing",
      date: new Date().getDate(),
    },
    {
      name: "shares",
      amount: 6000,
      description: "share market",
      date: new Date().getDate(),
    },
  ],
  expenses: [
    {
      name: "Clothes",
      amount: 1400,
      description: "clothes",
      date: new Date().getDate(),
    },
    {
      name: "Books",
      amount: 2000,
      description: "Books",
      date: new Date().getDate(),
    },
    {
      name: "Hostel fees",
      amount: 5000,
      description: "hostel",
      date: new Date().getDate(),
    },
  ],
};
let incomeArray,expenseArray;
if (login) {
  incomeArray = [
    ["Source", "Value"],
    ["Internship", 2000],
    ["PocketMoney", 5000],
    ["Marketing", 3500],
    ["shares", 6000],
  ];
  expenseArray = [
    ["Source", "Value"],
    ["Clothes", 1400],
    ["Books", 2000],
    ["Hostel fees", 5000],
  ];
} else {
  incomeArray = [];
   expenseArray = [];
}

function getTotalIncome(incomeArray) {
  let totalIncome = 0;
  for (let element of incomeArray) {
    totalIncome += element.amount;
  }
  return totalIncome;
}
function getTotalExpense(expenseArray) {
  let totalExpense = 0;
  for (let element of expenseArray) {
    totalExpense += element.amount;
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
if (login) {
  totalIncome.innerText = getTotalIncome(user.incomeSources);
  totalExpense.innerText = getTotalExpense(user.expenses);
  totalSaving.innerText =
    getTotalIncome(user.incomeSources) - getTotalExpense(user.expenses);
} else {
  totalIncome.innerText = 0;
  totalExpense.innerText = 0;
  totalSaving.innerText = 0;
}
//charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function makeVisualizationData(dataArray) {
  let array = [];
  for (let elem of dataArray) {
    array.push([elem.name, elem.value]);
  }
  array.unshift(["Name", "Value"]);
  return array;
}

function drawChart() {
  var incomeData = google.visualization.arrayToDataTable(incomeArray);

  var incomeOptions = {
    title: "Income Sources",
    backgroundColor: "rgb(243, 247, 252)",
    pieHole: 0.4,
  };

  var incomeChart = new google.visualization.PieChart(
    document.getElementById("incomePieChart")
  );

  incomeChart.draw(incomeData, incomeOptions);

  var expenseData = google.visualization.arrayToDataTable(expenseArray);

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
