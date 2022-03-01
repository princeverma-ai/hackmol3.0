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

let table = document.querySelector("#incomeTable");

let incomeAmount = document.querySelector("#incomeAmount");
let incomeName = document.querySelector("#incomeName");
let incomeDescription = document.querySelector("#incomeDescription");
let incomeAdd = document.querySelector("#incomeAdd");

incomeAdd.addEventListener("click", (e) => {
  axios({
    method: "post",
    url: `/${user._id}/addIncome`,
    data: {
      name: incomeName.value,
      amount: incomeAmount.value,
      description: incomeDescription.value,
    },
  })
    .then((data) => {
      console.log("Added");
    })
    .catch((err) => {
      console.log(err);
    });

  table.innerHTML += `<tr>
      <td>${new Date().getDate()}</td>
      <td>${incomeAmount.value}</td>
      <td>${incomeName.name}</td>
      <td>${incomeDescription.value}</td>
    </tr>`;
    user.incomeSources.push({
      name:incomeName.value,
      amount:parseInt(incomeAmount.value),
      description:incomeDescription.value
    })
    incomeArray.push([incomeName.value,parseInt(incomeAmount.value)])
});

function updateTable(incomeArray) {
  let fullTable = ``;
  for (let elem of incomeArray) {
    fullTable += `<tr>
  <td>${elem.date}</td>
  <td>${elem.amount}</td>
  <td>${elem.name}</td>
  <td>${elem.description}</td>
</tr>`;
  }
  table.innerHTML += fullTable;
}
updateTable(user.incomeSources);

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
