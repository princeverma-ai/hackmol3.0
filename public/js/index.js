const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginButton = document.querySelector("#loginSubmit");
let email, password;
let userServer;
let login=false;
loginButton.addEventListener("click", (e) => {
  console.log("hlo");
  email = loginEmail.value;
  password = loginPassword.value;
  axios({
    method: "post",
    url: "/getUser",
    data: {
      email: loginEmail.value,
      password: loginPassword.value,
    },
  })
    .then((data) => {
      userServer = data.data.user;
      axios({
        method: "post",
        url: "/login",
        data: {
          email: loginEmail.value,
          password: loginPassword.value,
        },
      })
        .then((data) => {
          document.open("text/html", "replace");
          document.write(data.data);
          document.close();
          login=true;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
