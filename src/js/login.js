const API_URL = "https://projeto-rti-api.herokuapp.com/api/auth.php";
const SUCCESS_MESSAGE = "Success";

const errorBanner = document.getElementById("error-banner");

document.getElementById("submit-input").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;

  const userData = {
    username: username,
    password: password,
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      // return response.json();
      if (response.status === 200) {
        errorBanner.classList.value = "alert alert-success";
        errorBanner.style.display = "block";
        errorBanner.innerHTML = "Login com sucesso!";

        localStorage.setItem("username", username);

        setTimeout(() => {
          window.location = "/RTI-Dashboard/src/dashboard.html";
        }, 500);
      } else if (response.status === 401) {
        errorBanner.classList.value = "alert alert-danger";
        errorBanner.style.display = "block";
        errorBanner.innerHTML = "Ocorreu um erro!";
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
