function triggerLoadingSpinner() {
  document.getElementById("loading-spinner").style.display = "block";
}

function disableLoadingSpinner() {
  document.getElementById("loading-spinner").style.display = "none";
}

export { triggerLoadingSpinner, disableLoadingSpinner };
