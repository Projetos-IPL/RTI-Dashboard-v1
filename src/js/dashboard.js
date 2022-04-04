document.getElementById("logout-button").addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("username");
  window.location = "/RTI-Dashboard/src/index.html";
});
