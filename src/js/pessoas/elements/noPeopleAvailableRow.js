function noPeopleAvailableRow() {
  const errorTr = document.createElement("tr");
  const errorTd = document.createElement("td");
  errorTd.colSpan = 3;

  errorTr.appendChild(errorTd);
  errorTd.innerText = "Sem pessoas registadas!";

  return errorTr;
}

export default noPeopleAvailableRow;
