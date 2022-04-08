function logout(event) {
  event.preventDefault();

  localStorage.removeItem("username");

  window.location = "index.html";
}

export default logout;
