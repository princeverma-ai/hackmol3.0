const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginButton = document.querySelector("#loginSubmit");
let email, password;
let user;
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
      user = data.data.user;
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
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
