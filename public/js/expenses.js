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

sideBarOpened = false;

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

let expensesTable=document.querySelector('#expensesTable')
let expenseAmount = document.querySelector("#expenseAmount");
let expenseName = document.querySelector("#expenseName");
let expenseDescription = document.querySelector("#expenseDescription");
let expenseAdd = document.querySelector("#expenseAdd");

expenseAdd.addEventListener("click", (e) => {
  axios({
    method: "post",
    url: `/${user._id}/addExpense`,
    data: {
      name: expenseName.value,
      amount: expenseAmount.value,
      description: expenseDescription.value,
    },
  })
    .then((data) => {
      console.log(data);
      expensesTable.innerHTML += `<tr>
      <td>${(new Date()).getDate()}</td>
      <td>${expenseAmount.value}</td>
      <td>${expenseName.name}</td>
      <td>${expenseDescription.value}</td>
    </tr>`
    })
    .catch((err) => {
      console.log(err);
    });
});
function updateTable(incomeArray) {
  let fullTable = ``;
  for (let elem of incomeArray) {
    fullTable += `<tr>
  <td>${elem.date}</td>
  <td>${elem.value}</td>
  <td>${elem.name}</td>
  <td>${elem.details}</td>
</tr>`;
  }
  expensesTable.innerHTML += fullTable;
}
updateTable(user.expenses);

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
