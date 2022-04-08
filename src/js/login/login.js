import { request } from "../utils/utils.js";
import {
  triggerLoadingSpinner,
  disableLoadingSpinner,
} from "../common/loadingSpinner/loadingSpinner.js";

document.getElementById("submit-input").addEventListener("click", (e) => {
  e.preventDefault();

  let isLoading = true;
  let originalValue = e.target.value;

  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;
  const errorBanner = document.getElementById("error-banner");

  const userData = {
    username: username,
    password: password,
  };

  // Ativar spinner antes de efetuar o pedido

  triggerLoadingSpinner();

  request("POST", "auth.php", userData, null)
    .then(() => {
      errorBanner.classList.value = "alert alert-success";
      errorBanner.style.display = "block";
      errorBanner.innerText = "Login com sucesso!";

      // save username in localstorage (simulates a session start in PHP)
      localStorage.setItem("username", username);

      // wait before redirecting to dashboard
      setTimeout(() => {
        window.location = "dashboard.html";
      }, 500);
    })
    .catch((res) => {
      e.target.value = "Entrar";

      errorBanner.classList.value = "alert alert-danger";
      errorBanner.style.display = "block";

      errorBanner.innerText = res.message;
    })
    .finally(() => {
      disableLoadingSpinner();
    });
});
