function logout(event) {
  event.preventDefault();

  sessionStorage.clear();

  window.location = "/RTI-Dashboard/src/index.html";
}

export default logout;
