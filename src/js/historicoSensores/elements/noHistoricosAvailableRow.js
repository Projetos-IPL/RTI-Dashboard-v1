function noHistoricosAvailableRow() {
  const errorTr = document.createElement("tr");
  const errorTd = document.createElement("td");
  errorTd.colSpan = 3;

  errorTr.appendChild(errorTd);
  errorTd.innerText = "Sem históricos registados!";

  return errorTr;
}

export default noHistoricosAvailableRow;
