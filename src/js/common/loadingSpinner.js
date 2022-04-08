function loadingSpinner(element, isLoading, value) {
  if (isLoading) {
    element.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';
  } else {
    element.innerText = value;
  }
}

export default loadingSpinner;
